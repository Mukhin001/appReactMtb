import { NavLink } from 'react-router-dom';
import st from '../style.module.css';

const NavPhotoMain = () => {
    return ( 
        <nav className={st.NavPhotoMainNav}>
            <ul>
                <li><NavLink to="/photo/pagePhotoOne">One</NavLink></li>
                <li><NavLink to="/photo/pagePhotoTwo">Two</NavLink></li>
                <li><NavLink to="/photo/pagePhotoThree">Three</NavLink></li>
                <li><NavLink to="/photo/pagePhotoFour">Four</NavLink></li>
                <li><NavLink to="/photo/pagePhotoFive">Five</NavLink></li>
            </ul>
        </nav>
     );
};
 
export default NavPhotoMain;