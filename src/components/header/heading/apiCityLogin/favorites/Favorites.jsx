import { NavLink } from "react-router-dom";

const Favorites = ({ likesLength }) => {
    return ( 
        <div>
            <NavLink to='/favorites'>{`Favorites ${likesLength}`}</NavLink>
        </div>
     );
};
 
export default Favorites;