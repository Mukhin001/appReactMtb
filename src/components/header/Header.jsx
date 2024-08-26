import Heading from './heading/Heading';
import NavFixed from './navFixed/NavFixed';
import st from './style.module.css';
import { ContextClientWidth } from '../../App';
import { useContext, useEffect, useRef, useState } from 'react';

const Header = ({setThemeSite, userNameLogin, loginExit, linkExit, getPhotoFn, setSearchPhoto, getVideoFn}) => {
    
    const [stDisplayActive, setStDisplayActive] = useState('block');
    const [stDisplayActiveBtn, setStDisplayActiveBtn] = useState('none');
    const headingRef = useRef();
    const btnOpenRef = useRef();
    const btnCloseRef = useRef();
 
    const contextClientWidth = useContext(ContextClientWidth);
    const [btnThemeText, setBtnThemeText] = useState('light'); 

    useEffect(() => {
        
        if(contextClientWidth > 750) {
            setStDisplayActive('block');
            setStDisplayActiveBtn('none');
        } else {
            setStDisplayActive('none');
            setStDisplayActiveBtn('block');
        }
    }, [contextClientWidth]);

    function openHeaderMenuMobile() {
        headingRef.current.style.display = 'block';
        btnOpenRef.current.style.display = 'none';
        btnCloseRef.current.style.display = 'block';
    };

    function closeHeaderMenuMobile() {
        headingRef.current.style.display = 'none';
        btnOpenRef.current.style.display = 'block';
        btnCloseRef.current.style.display = 'none';
    };  
    
    function btnTheme(elem) {
        if(elem.target.textContent === 'light') {
            setBtnThemeText('dark');
            setThemeSite('dark');
        } else {
            setBtnThemeText('light'); 
            setThemeSite('light');
        }  
    };
    
    return ( 
        <header>

            <div ref={headingRef} className={st.heading} style={{display: stDisplayActive}}>
                    
                <Heading loginExit={loginExit} linkExit={linkExit} getPhotoFn={getPhotoFn} setSearchPhoto={setSearchPhoto} getVideoFn={getVideoFn}/>
                <button ref={btnCloseRef} style={{display: 'none'}} onClick={closeHeaderMenuMobile}>Close</button>   
                <NavFixed />
            </div>

            <button ref={btnOpenRef} style={{display: stDisplayActiveBtn}} onClick={openHeaderMenuMobile}>Open</button> 
                                   
            <div className={st.greetingTheme}>
                <h4>{`Hello ${userNameLogin}`}</h4>
                <button onClick={btnTheme}>{btnThemeText}</button>
            </div>

        </header>
        
     );
};
    
export default Header;