import { NavLink } from "react-router-dom";
import st from '../style.module.css';

const NavVideoMain = ({clickNavbarMain}) => {
    return ( 
        <nav className={st.NavVideoMainNav}>
            <ul>
                <li><NavLink to="/video/street" onClick={clickNavbarMain}>Street</NavLink></li>
                <li><NavLink to="/video/dirt" onClick={clickNavbarMain}>Dirt</NavLink></li>
                <li><NavLink to="/video/park" onClick={clickNavbarMain}>Park</NavLink></li>
                <li><NavLink to="/video/slopestyle" onClick={clickNavbarMain}>SlopeStyle</NavLink></li>
            </ul>
        </nav>
     );
};
 
export default NavVideoMain;