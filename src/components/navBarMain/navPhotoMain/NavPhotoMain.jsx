import { NavLink } from 'react-router-dom';
import st from '../style.module.css';

const NavPhotoMain = ({clickNavbarMain}) => {
    return ( 
        <nav className={st.NavPhotoMainNav}>
            <ul>
                <li><NavLink to="/photo/cap2013" onClick={clickNavbarMain}>One</NavLink></li> 
                <li><NavLink to="/photo/cap2015" onClick={clickNavbarMain}>Two</NavLink></li>
                <li><NavLink to="/photo/IMG-6437" onClick={clickNavbarMain}>Three</NavLink></li>
                <li><NavLink to="/photo/IMG_6784" onClick={clickNavbarMain}>Four</NavLink></li>
                <li><NavLink to="/photo/scale_1200" onClick={clickNavbarMain}>Five</NavLink></li>
            </ul>
        </nav>
     );
};
 
export default NavPhotoMain;