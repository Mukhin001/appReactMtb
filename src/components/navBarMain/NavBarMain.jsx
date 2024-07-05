import { NavLink } from 'react-router-dom';
import st from './style.module.css';
import { useRef, useState } from 'react';

const NavBarMain = () => {
   
    const btn = useRef();

    const [styleUlLeft, setStyleUlLeft] = useState('-200%');

    function navTransitionLeft() {
       if(styleUlLeft === '-200px') {
            setStyleUlLeft('30px');
       } else {
            setStyleUlLeft('-200px');
       }
    };

    function closeNavBarMain(e) {
        if(btn.current !== e.target ) {
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
            <button onClick={navTransitionLeft} ref={btn}>O</button>
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