import st from './style.module.css';
import { useState , useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { photoServer } from '../../../../server/photoServer';
import { videoServer } from '../../../pagesMain/mainVideo/videoServer';

const Search = ({getPhotoFn, getVideoFn, setSearchPhoto, setSearchVideo, searchUserTextFn, theme}) => {
    const [siteSearchTop, setSiteSearchTop] = useState('-100px');
    const [searchWrapDisplay, setSearchWrapDisplay] = useState('0');
    const [searchWrapHeight, setSearchWrapHeight] = useState('0');
    const inputRef = useRef();
    const searchWrap = useRef();

    const [inputValueCommon, setinputValueCommon] = useState('');
    const [suggestSearchArrPhoto, setsuggestSearchArrPhoto] = useState([]);
    const [suggestSearchArrVideo, setsuggestSearchArrVideo] = useState([]);
    
    function siteSearchDown() {
        setSiteSearchTop('0');
        setSearchWrapDisplay('1');
        setSearchWrapHeight('100%');
        setinputValueCommon('');
        setSearchPhoto([]);
        setSearchVideo([]);
        searchUserTextFn('');
    };

    function siteSearchUp() {
        setSiteSearchTop('-100px');
        setSearchWrapDisplay('0');
        setSearchWrapHeight('0');  
        
    };

    function closeSiteSear(e) {
        if( e.target === searchWrap.current) {
            siteSearchUp();
            if(inputRef.current) {
                inputRef.current.value = '';
                setsuggestSearchArrPhoto([]);
                setsuggestSearchArrVideo([]);
            }
        }
        
    }; 

    function onChangeInput(input) {
        setinputValueCommon(input.target.value);

            photoServer.forEach(obj => {
                obj.description.forEach(element => {
                    if(element.toLocaleLowerCase().startsWith(input.target.value.toLocaleLowerCase())) {
                        setinputValueCommon(input.target.value);
                    }
                })
            });

            videoServer.forEach((objMain) => {

                objMain.content.forEach((obj) => {
                    obj.description.forEach(element => {
                        if(element.toLocaleLowerCase().startsWith(input.target.value.toLocaleLowerCase())){  
                                setinputValueCommon(input.target.value); 
                        }
                    })
                });
                
            });   

        if(suggestSearchArrPhoto.length === 0) {    
            photoServer.forEach(obj => {
                // проверка на пробелы
                if(/^\s*$/.test(inputValueCommon)) {
                    return
                }
                obj.description.forEach(element => {
                    if(element.toLocaleLowerCase().startsWith(inputValueCommon.toLocaleLowerCase())) {
                        setsuggestSearchArrPhoto(prev => [...new Set(prev), obj.name]);
                    }   
                })   
            });   

        } else {
           setsuggestSearchArrPhoto(suggestSearchArrPhoto.filter(e => e.toLocaleLowerCase().startsWith(inputValueCommon.toLocaleLowerCase())));
        }   

        if(suggestSearchArrVideo.length === 0) {
            
            videoServer.forEach((objMain) => {
                objMain.content.forEach((obj) => {
                        if(/^\s*$/.test(inputValueCommon)) {
                            return
                        }
                        obj.description.forEach(element => {
                                
                            if(element.toLocaleLowerCase().startsWith(inputValueCommon.toLocaleLowerCase())){

                                setsuggestSearchArrVideo(prev => [...new Set(prev), obj.name]);
                               
                            }
                        })
                });
            });   
        } else {
            setsuggestSearchArrVideo(suggestSearchArrVideo.filter(e => e.toLocaleLowerCase().startsWith(inputValueCommon.toLocaleLowerCase())));
        }
    };


    function foundWebSite() {           
        
        if(/^\s*$/.test(inputValueCommon) || /^\s*$/.test(inputValueCommon)) {
            searchUserTextFn('empty search...');
            siteSearchUp();
            return;
        }

        searchUserTextFn(inputValueCommon);

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
        siteSearchUp();
    };


    return ( 
        <div>
            <div className={st.siteSearch} style={{transform: `translateY(${siteSearchTop})`}}>
                <div>
                    <label htmlFor="site-search">Search the site:</label>
                    <input style={{colorScheme: `${theme}`}} ref={inputRef} type="search" id='site-search' name='site-search' onChange={onChangeInput}/>
                    <NavLink to="/search" onClick={foundWebSite}>search</NavLink>
                    <button onClick={siteSearchUp}>close</button>
                </div>
                <div>
                    <ul className={st.suggestSearch}>
                        { suggestSearchArrPhoto.map(li => <NavLink onClick={siteSearchUp} to={`/photo/${li}`} key={li + 'suggestphoto'}><li>{li}</li></NavLink>  ) }
                    </ul>
                    <ul className={st.suggestSearch}>
                        { suggestSearchArrVideo.map(li => <NavLink onClick={siteSearchUp} to={`/video/${li}`} key={li + 'suggestvideo'}><li>{li}</li></NavLink> ) }
                    </ul>
                </div>
            </div>
            <div onClick={closeSiteSear} ref={searchWrap} className={st.searchWrap} style={{opacity: `${searchWrapDisplay}`, height: `${searchWrapHeight}`}}>
            </div>
            <button onClick={siteSearchDown}>search web site</button>
        </div>
     );
};
 
export default Search;