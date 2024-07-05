import st from './style.module.css';
import { useState , useRef} from 'react';

const Search = () => {
    const [siteSearchTop, setSiteSearchTop] = useState('-100%');
    const siteRef = useRef();
    const labelRef = useRef();
    const inputRef = useRef();
    const btnSearchRef = useRef();
    const btnCloseRef = useRef();
    const btnSearch = useRef();

    function siteSearchDown() {
        
        setSiteSearchTop('0');
    };

    function siteSearchUp() {
        setSiteSearchTop('-100%');
    };

    function closeSiteSear(e) {
        if( e.target !== btnSearch.current &&
            e.target !== labelRef.current  &&
            e.target !== inputRef.current  &&
            e.target !== siteRef.current &&
            e.target !== btnCloseRef.current &&
            e.target !== btnSearchRef.current 
        ) {
            setSiteSearchTop('-100%');
            document.body.removeEventListener('click', closeSiteSear);
        }
    };
    
    document.body.addEventListener('click', closeSiteSear);

    return ( 
        <div>
            <div ref={siteRef} className={st.siteSearch} style={{top: `${siteSearchTop}`}}>
                <label ref={labelRef} htmlFor="site-search">Search the site:</label>
                <input ref={inputRef} type="search" id='site-search' name='site-search'/>
                <button ref={btnSearchRef}>search</button>
                <button ref={btnCloseRef} onClick={siteSearchUp}>close</button>
            </div>
            <button ref={btnSearch} onClick={siteSearchDown}>search</button>
        </div>
     );
};
 
export default Search;