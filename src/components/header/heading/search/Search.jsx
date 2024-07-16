import st from './style.module.css';
import { useState , useRef} from 'react';

const Search = () => {
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

    function siteSearchDown() {
        setSiteSearchTop('0');
        setSearchWrapDisplay('1');
        setSearchWrapHeight('100%');
    };

    function siteSearchUp() {
        setSiteSearchTop('-100px');
        setSearchWrapDisplay('0');
        setSearchWrapHeight('0');
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
        }
    };
    
    document.body.addEventListener('click', closeSiteSear);

    return ( 
        <div>
            
                <div ref={siteRef} className={st.siteSearch} style={{transform: `translateY(${siteSearchTop})`}}>
                    <label ref={labelRef} htmlFor="site-search">Search the site:</label>
                    <input ref={inputRef} type="search" id='site-search' name='site-search'/>
                    <button ref={btnSearchRef}>search</button>
                    <button ref={btnCloseRef} onClick={siteSearchUp}>close</button>
                    
                </div>
                <div ref={searchWrap} className={st.searchWrap} style={{opacity: `${searchWrapDisplay}`, height: `${searchWrapHeight}`}}>
                </div>
            <button ref={btnSearch} onClick={siteSearchDown}>search</button>
        </div>
     );
};
 
export default Search;