import { NavLink } from 'react-router-dom';
import st from '../style.module.css';

const NavPhotoMain = () => {
    return ( 
        <nav className={st.NavPhotoMainNav}>
            <ul>
                <li><NavLink to="/photo/cap2013">One</NavLink></li> 
                <li><NavLink to="/photo/cap2015">Two</NavLink></li>
                <li><NavLink to="/photo/IMG-6437">Three</NavLink></li>
                <li><NavLink to="/photo/IMG_6784">Four</NavLink></li>
                <li><NavLink to="/photo/scale_1200">Five</NavLink></li>
            </ul>
        </nav>
     );
};
 
export default NavPhotoMain;