import st from './style.module.css';
import { useState , useRef} from 'react';
import { NavLink } from 'react-router-dom';
import { photoServer } from '../../../../server/photoServer';
import { videoServer } from '../../../pagesMain/mainVideo/videoServer';

const Search = ({getPhotoFn, getVideoFn, setSearchPhoto}) => {
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
    const [inputValue, setInputValue] = useState('');

    const [suggestSearchArr, setSuggestSearchArr] = useState([]);
    
    function siteSearchDown() {
        setSiteSearchTop('0');
        setSearchWrapDisplay('1');
        setSearchWrapHeight('100%');
        // setSearchPhoto([]);
    };

    function siteSearchUp() {
        setSiteSearchTop('-100px');
        setSearchWrapDisplay('0');
        setSearchWrapHeight('0');

        // if(inputRef.current) {
        //     inputRef.current.value = '';
        // }
        // setInputValue('');
        // setSuggestSearchArr([]);
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
            
            // if(inputRef.current) {
            //     inputRef.current.value = '';
            // }
            // setInputValue('');
            // setSuggestSearchArr([]);
        }
    };
    
    document.body.addEventListener('click', closeSiteSear);

    // function listenerInput(event) {

    //     photoServer.forEach(elem => {
    //         if(elem.name.toLowerCase().includes(event.target.value.toLowerCase())) {
    //                 console.log(elem);
    //             //getPhotoFn(elem)
            
    //         }
    //     });
    // };
    
    
    function onChangeInput(input) {
        
        setInputValue(input.target.value);

        if(suggestSearchArr.length === 0) {    
            photoServer.forEach(obj => {
                if(obj.description.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())) {
                setSuggestSearchArr(prev => [...new Set(prev), obj.name])
                }   
            });      
        } else {
           setSuggestSearchArr(suggestSearchArr.filter(e => e.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())))
        }
      //  console.log(suggestSearchArr);
        
    };

    function foundWebSite() {

        photoServer.forEach(obj => {
                if(obj.description.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())) {
                    getPhotoFn(obj);
                }  
        });

        // videoServer.forEach((objMain) => {
        //     objMain.content.forEach((obj) => {
        //             if(obj.description.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())) {
        //                 //console.log(obj);
        //                 getVideoFn(obj);
        //             }
        //         })
        // })
        if(inputRef.current) {
            inputRef.current.value = '';
        }
        setSearchPhoto([]);
        setInputValue('');
        setSuggestSearchArr([]);
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
                        { suggestSearchArr.map(li =>   <NavLink to={`/photo/${li}`} key={li + 'suggest'}><li>{li}</li></NavLink>  ) }
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