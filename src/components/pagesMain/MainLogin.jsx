import { NavLink } from "react-router-dom";
import { useState } from "react";

const MainLogin = ({enterAcc}) => {
    const [login, setLOgin] = useState('');
    const [password, setPassword] = useState('');

    function setLOginFn(e) {
        setLOgin(e.target.value);
    };

    function setPasswordFn(e) {
        setPassword(e.target.value);
    };
    
    function checkUserAccaunt() {
            
        for(let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if(key === login && localStorage.getItem(key) === password) {
                console.log(key, localStorage.getItem(key));
                enterAcc(key);
            }
            
          }
    };

    return ( 
        <div>
            {/* <form action=""> */}
                <div>
                    <label htmlFor="login">login</label>
                    <input type="text" id="login" onChange={setLOginFn}/>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" onChange={setPasswordFn}/>
                </div>
                <button type="submit" onClick={checkUserAccaunt}>Enter</button>
                <NavLink to="/createAccaunt">no accaunt</NavLink>
            {/* </form>     */}
        </div>
     );
};
 
export default MainLogin;