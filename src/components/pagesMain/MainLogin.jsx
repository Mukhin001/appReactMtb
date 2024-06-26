import { NavLink } from "react-router-dom";


const MainLogin = () => {
    
    let keysLocalStorage = Object.keys(localStorage);
    for(let key of keysLocalStorage) {
        console.log(key, keysLocalStorage);
    };


    return ( 
        <div>
            <div>
                <label htmlFor="login">login</label>
                <input type="text" id="login"/>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" id="password"/>
            </div>
            <button>Enter</button>
            <NavLink to="/createAccaunt">no accaunt</NavLink>
        </div>
     );
};
 
export default MainLogin;