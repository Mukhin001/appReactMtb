import { NavLink } from 'react-router-dom';
import st from './style.module.css';
import { useRef, useState } from 'react';

const NavBarMain = () => {
   
    const btnOpen = useRef();
    const btnClose = useRef();

    const [styleUlLeft, setStyleUlLeft] = useState('-200%');
    const [styleBtnOpen, setStyleBtnOpen] = useState('');
    const [styleBtnClose, setStyleBtnClose] = useState('none');

    function navTransitionRight() {
            setStyleUlLeft('0');
            setStyleBtnOpen('none');
            setStyleBtnClose('');
    };

    function navTransitionLeft() {
        setStyleUlLeft('-200%');
        setStyleBtnOpen('');
        setStyleBtnClose('none');
    };

    function closeNavBarMain(e) {
        if(btnOpen.current !== e.target ) {
            document.body.removeEventListener('click', closeNavBarMain);
            setStyleUlLeft('-200%'); 
        }
    };
    
    document.body.addEventListener('click', closeNavBarMain);

   function ulMouseOver() {
        setStyleUlLeft('30px');
   };
   
   function ulMouseLeave() {
        setStyleUlLeft('-200%'); 
   };

    return ( 
        <div className={st.NavBarMain}>
            <button onClick={navTransitionRight} ref={btnOpen} style={{display: `${styleBtnOpen}`}}>Open</button>
            <button onClick={navTransitionLeft} ref={btnClose} style={{display: `${styleBtnClose}`}}>Close</button>
            <nav onMouseOver={ulMouseOver} onMouseLeave={ulMouseLeave}>
                <ul style={{left: `${styleUlLeft}`}}>
                    <li><NavLink to="/">home</NavLink></li>
                    <li><NavLink to="/photo">photo</NavLink></li>
                    <li><NavLink to="/video">video</NavLink></li>
                    <li><NavLink to="/news">news</NavLink></li>
                    <li><NavLink to="/about">about</NavLink></li>
                </ul>
            </nav>
        </div>
     );
};
 
export default NavBarMain;