import Heading from './heading/Heading';
import NavFixed from './navFixed/NavFixed';
import st from './style.module.css';
import { ContextClientWidth } from '../../App';
import { useRef, useState } from 'react';

const Header = ({userGreeting, loginExit, linkExit, getPhotoFn, setSearchPhoto, getVideoFn}) => {
    const [stDisplayActive, setStDisplayActive] = useState('block');
    const [stDisplayActiveBtn, setStDisplayActiveBtn] = useState('none');
    const headingRef = useRef();
    const btnOpenRef = useRef();
    const btnCloseRef = useRef();

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
   
    return ( 
        <header>

            {/* <div className={st.heading}>
                <Heading loginExit={loginExit} linkExit={linkExit} getPhotoFn={getPhotoFn} setSearchPhoto={setSearchPhoto} getVideoFn={getVideoFn}/>
                <NavFixed />
            </div> */}
            {/* ? style={display: 'none'} :  style={display: 'block'}  */}
            <ContextClientWidth.Consumer>
                {value => 
                    <>
                        { (value > 450) ? setStDisplayActive('block') : setStDisplayActive('none') }
                        { (value > 450) ? setStDisplayActiveBtn('none') : setStDisplayActiveBtn('block') }
                        <div ref={headingRef} className={st.heading} style={{display: stDisplayActive}}>
                              
                            <Heading loginExit={loginExit} linkEsetStDisplayxit={linkExit} getPhotoFn={getPhotoFn} setSearchPhoto={setSearchPhoto} getVideoFn={getVideoFn}/>
                            <button ref={btnCloseRef} style={{display: 'none'}} onClick={closeHeaderMenuMobile}>Close</button>   
                            <NavFixed />
                        </div>

                        <button ref={btnOpenRef} style={{display: stDisplayActiveBtn}} onClick={openHeaderMenuMobile}>Open</button> 
                                   
                    </>
                    }
            </ContextClientWidth.Consumer>

            <h4>{userGreeting}</h4>

        </header>
        
     );
};
    
export default Header;