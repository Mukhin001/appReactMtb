import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav>
            NavBar
            <ul>
                <li><NavLink to="/">home</NavLink></li>
                <li><NavLink to="/photo">photo</NavLink></li>
                <li><NavLink to="/video">video</NavLink></li>
                <li><NavLink to="/news">news</NavLink></li>
                <li><NavLink to="/about">about</NavLink></li>
            </ul>
        </nav>
     );
}
 
export default NavBar;