import { NavLink } from "react-router-dom";
import st from '../style.module.css';

const NavVideoMain = () => {
    return ( 
        <nav className={st.NavVideoMainNav}>
            <ul>
                <li><NavLink to="/video/street">Street</NavLink></li>
                <li><NavLink to="/video/dirt">Dirt</NavLink></li>
                <li><NavLink to="/video/park">Park</NavLink></li>
                <li><NavLink to="/video/slopestyle">SlopeStyle</NavLink></li>
            </ul>
        </nav>
     );
}
 
export default NavVideoMain;