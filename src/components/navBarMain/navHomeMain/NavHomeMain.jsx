import { NavLink } from 'react-router-dom';
import st from '../style.module.css';

const NavHomeMain = () => {
    return ( 
        <nav className={st.NavHomeMainUl}>
            <ul>
                <li><NavLink to="one">One</NavLink></li>
                <li><NavLink to="two">Two</NavLink></li>
                <li><NavLink to="/home/three">Three</NavLink></li>
                <li><NavLink to="/home/four">Four</NavLink></li>
                <li><NavLink to="/home/five">Five</NavLink></li>
            </ul>
        </nav>
     );
}
 
export default NavHomeMain;