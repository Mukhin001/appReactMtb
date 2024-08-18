import { NavLink } from 'react-router-dom';
import st from './style.module.css';
import mobile from '../mobileFile/mobile.module.css';
import { useRef, useState } from 'react';
import NavHomeMain from './navPhotoMain/NavPhotoMain';
import NavVideoMain from './navVideoMain/NavVideoMain';

const NavBarMain = () => {
   
    const btnOpen = useRef();
    const btnClose = useRef();

    const [styleUlLeft, setStyleUlLeft] = useState('-200%');
    const [styleBtnOpen, setStyleBtnOpen] = useState('');
    const [styleBtnClose, setStyleBtnClose] = useState('none');

    function navTransitionRight() {
            setStyleUlLeft('30px');
            setStyleBtnOpen('none');
            setStyleBtnClose('');
    };

    function navTransitionLeft() {
        setStyleUlLeft('-200%');
        setStyleBtnOpen('');
        setStyleBtnClose('none');
    };

    function closeNavBarMain(e) {
        if(btnOpen.current !== e.target) {
            document.body.removeEventListener('click', closeNavBarMain);
            setStyleBtnOpen('');
            setStyleBtnClose('none');
            setStyleUlLeft('-200%'); 
        }
    };
    
    document.body.addEventListener('click', closeNavBarMain);

   function ulMouseOver() {
        setStyleUlLeft('30px');
        setStyleBtnOpen('none');
        setStyleBtnClose('');
   };
   
   function ulMouseLeave() {
        setStyleUlLeft('-200%'); 
        setStyleBtnOpen('');
        setStyleBtnClose('none');
   };

    return ( 
        <div className={`${st.NavBarMainWrapper} ${mobile.NavBarMainWrapper}`}>
            <button onClick={navTransitionRight} ref={btnOpen} style={{display: `${styleBtnOpen}`}}>Open</button>
            <button onClick={navTransitionLeft} ref={btnClose} style={{display: `${styleBtnClose}`}}>Close</button>
            <nav onMouseOver={ulMouseOver} onMouseLeave={ulMouseLeave} className={st.NavBarMainNav}>
                <ul style={{left: `${styleUlLeft}`}}  className={st.NavBarMainUl}>
                    <li><NavLink to="/">home</NavLink></li>
                    <li  className={st.navLiPhoto}><NavLink to="/photo">photo</NavLink><NavHomeMain /></li>
                    <li  className={st.navLiVideo}><NavLink to="/video">video</NavLink><NavVideoMain /></li>
                    <li><NavLink to="/news">news</NavLink></li>
                    <li><NavLink to="/about">about</NavLink></li>
                </ul>
            </nav>
        </div>
     );
};
//
 
export default NavBarMain;