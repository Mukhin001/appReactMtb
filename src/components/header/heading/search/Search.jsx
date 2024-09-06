import st from './style.module.css';
import { useState , useRef} from 'react';
import { NavLink } from 'react-router-dom';
import { photoServer } from '../../../../server/photoServer';
import { videoServer } from '../../../pagesMain/mainVideo/videoServer';

const Search = ({getPhotoFn, getVideoFn, setSearchPhoto, setSearchVideo, searchUserTextFn}) => {
    const [siteSearchTop, setSiteSearchTop] = useState('-100px');
    const [searchWrapDisplay, setSearchWrapDisplay] = useState('0');
    const [searchWrapHeight, setSearchWrapHeight] = useState('0');
    const siteRef = useRef();
    const labelRef = useRef();
    const inputRef = useRef();
    const btnSearchRef = useRef();
    const btnCloseRef = useRef();
    const btnSearch = useRef();
    const searchWrap = useRef();

    const [inputValueCommon, setinputValueCommon] = useState('');

    const [inputValuePhoto, setinputValuePhoto] = useState('');
    const [inputValueVideo, setinputValueVideo] = useState('');

    const [suggestSearchArrPhoto, setsuggestSearchArrPhoto] = useState([]);
    const [suggestSearchArrVideo, setsuggestSearchArrVideo] = useState([]);
    
    function siteSearchDown() {
        setSiteSearchTop('0');
        setSearchWrapDisplay('1');
        setSearchWrapHeight('100%');
        setSearchPhoto([]);
        setSearchVideo([]);
        searchUserTextFn('');
    };

    function siteSearchUp() {
        setSiteSearchTop('-100px');
        setSearchWrapDisplay('0');
        setSearchWrapHeight('0');

        if(inputRef.current) {
            inputRef.current.value = '';
            setsuggestSearchArrPhoto([]);
            setsuggestSearchArrVideo([]);
        }
        
    };

    function closeSiteSear(e) {
        if( e.target !== btnSearch.current &&
            e.target !== labelRef.current  &&
            e.target !== inputRef.current  &&
            e.target !== siteRef.current &&
            e.target !== btnCloseRef.current &&
            e.target !== btnSearchRef.current 
        ) {
            setSiteSearchTop('-100px');
            setSearchWrapDisplay('0');
            setSearchWrapHeight('0');
            document.body.removeEventListener('click', closeSiteSear);
            
            if(inputRef.current) {
                inputRef.current.value = '';
                setsuggestSearchArrPhoto([]);
                setsuggestSearchArrVideo([]);
            }
        }
    };
    
    document.body.addEventListener('click', closeSiteSear);

    // function listenerInput(event) {

    //     photoServer.forEach(elem => {
    //         if(elem.name.toLowerCase().startsWith(event.target.value.toLowerCase())) {
    //                 console.log(elem);
    //             //getPhotoFn(elem)
            
    //         }
    //     });
    // };
    
    

    function onChangeInput(input) {
        setinputValueCommon(input.target.value);

           photoServer.forEach(obj => {
                obj.description.forEach(element => {
                    if(element.toLocaleLowerCase().startsWith(input.target.value.toLocaleLowerCase())) {
                        setinputValuePhoto(input.target.value);
                    }
                })
           });

            videoServer.forEach((objMain) => {

                objMain.content.forEach((obj) => {
                    obj.description.forEach(element => {
                        if(element.toLocaleLowerCase().startsWith(input.target.value.toLocaleLowerCase())){  
                                setinputValueVideo(input.target.value); 
                        }
                    })
                });
                
            });   

        if(suggestSearchArrPhoto.length === 0) {    
            photoServer.forEach(obj => {
                // проверка на пробелы
                if(/^\s*$/.test(inputValuePhoto)) {
                    return
                }
                obj.description.forEach(element => {
                    if(element.toLocaleLowerCase().startsWith(inputValuePhoto.toLocaleLowerCase())) {
                        setsuggestSearchArrPhoto(prev => [...new Set(prev), obj.name]);
                    }   
                })   
            });   

        } else {
           setsuggestSearchArrPhoto(suggestSearchArrPhoto.filter(e => e.toLocaleLowerCase().startsWith(inputValuePhoto.toLocaleLowerCase())));
        }   

        if(suggestSearchArrVideo.length === 0) {
            
            videoServer.forEach((objMain) => {
                objMain.content.forEach((obj) => {
                        if(/^\s*$/.test(inputValueVideo)) {
                            return
                        }
                        obj.description.forEach(element => {
                                
                            if(element.toLocaleLowerCase().startsWith(inputValueVideo.toLocaleLowerCase())){

                                setsuggestSearchArrVideo(prev => [...new Set(prev), obj.name]);
                               
                            }
                        })
                });
            });   
        } else {
            setsuggestSearchArrVideo(suggestSearchArrVideo.filter(e => e.toLocaleLowerCase().startsWith(inputValueVideo.toLocaleLowerCase())));
        }
     
        
    };

    function foundWebSite() {           
        if(/^\s*$/.test(inputValuePhoto) || !inputValueCommon) {
            return;
        }
        if(/^\s*$/.test(inputValueVideo) || !inputValueCommon) {
            return;
        }

        searchUserTextFn(inputValueCommon, inputValuePhoto, inputValueVideo);


        photoServer.forEach(obj => {
            obj.description.forEach(element => {
                
                if(element.toLocaleLowerCase().startsWith(inputValueCommon.toLocaleLowerCase())) {
                    getPhotoFn(obj);
                }  
            }) 
        });
       
        videoServer.forEach((objMain) => {
            objMain.content.forEach((obj) => {
                obj.description.forEach(element => {
                    if(element.toLocaleLowerCase().startsWith(inputValueCommon.toLocaleLowerCase())) {

                        getVideoFn(obj);
                    }
                })    

                })
        });

        if(inputRef.current) {
            inputRef.current.value = '';
            setsuggestSearchArrPhoto([]);
            setsuggestSearchArrVideo([]);
        }
    };


    return ( 
        <div>
            <div ref={siteRef} className={st.siteSearch} style={{transform: `translateY(${siteSearchTop})`}}>
                <div>
                    <label ref={labelRef} htmlFor="site-search">Search the site:</label>
                    <input ref={inputRef} type="search" id='site-search' name='site-search' onChange={onChangeInput}/>
                    <NavLink to="/search" onClick={foundWebSite}>search</NavLink>
                    <button ref={btnCloseRef} onClick={siteSearchUp}>close</button>
                </div>
                <div>
                    <ul className={st.suggestSearch}>
                        { suggestSearchArrPhoto.map(li =>   <NavLink onClick={siteSearchUp} to={`/photo/${li}`} key={li + 'suggestphoto'}><li>{li}</li></NavLink>  ) }
                    </ul>
                    <ul className={st.suggestSearch}>
                        { suggestSearchArrVideo.map(li =>   <NavLink onClick={siteSearchUp} to={`/video/${li}`} key={li + 'suggestvideo'}><li>{li}</li></NavLink> ) }
                    </ul>
                </div>
            </div>
            <div ref={searchWrap} className={st.searchWrap} style={{opacity: `${searchWrapDisplay}`, height: `${searchWrapHeight}`}}>
            </div>
            <button ref={btnSearch} onClick={siteSearchDown}>search web site</button>
        </div>
     );
};
 
export default Search;