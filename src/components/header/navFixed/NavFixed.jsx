import { NavLink } from 'react-router-dom';
import st from './style.module.css';

const NavFixed = () => {
    //console.log(NavBar);
    return ( 
        <nav>
            NavBar
            <ul className={st.NavFixed}>
                <li><NavLink to="/">home</NavLink></li>
                <li><NavLink to="/photo">photo</NavLink></li>
                <li><NavLink to="/video">video</NavLink></li>
                <li><NavLink to="/news">news</NavLink></li>
                <li><NavLink to="/about">about</NavLink></li>
            </ul>
        </nav>
     );
};
 
export default NavFixed;