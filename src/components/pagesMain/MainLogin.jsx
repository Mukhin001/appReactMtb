import { NavLink } from "react-router-dom";
import { useState } from "react";

const MainLogin = ({enterAcc, loginExit, linkExit}) => {
    const [login, setLOgin] = useState('');
    const [password, setPassword] = useState('');

    function setLOginFn(e) {
        setLOgin(e.target.value);
    };

    function setPasswordFn(e) {
        setPassword(e.target.value);
    };
    
    function checkUserAccaunt(e) {
        if (Object.keys(localStorage).length){
            for(let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                    
                if(key === login && localStorage.getItem(key) === password)  {
                    enterAcc(key);
                    loginExit('Exit');
                    linkExit('/exit');
                    break;
                } else if(login === '' || password === '') {
                    alert('empty');
                    e.preventDefault();
                    break;
                } else if(Object.keys(localStorage).every((e) => e !== login)) {
                    alert('invakid login');
                    e.preventDefault();
                    break;
                } else if(Object.values(localStorage).every((e) => e !== password)) {
                    alert('invakid password');
                    e.preventDefault();
                    break;
                } 
            }
        } else {
            alert('localStorage empty create accaunt please.');
            e.preventDefault();
        }

    };

    return ( 
        <main>
            {/* <form action=""> */}
                <div>
                    <label htmlFor="login">Login</label>
                    <input type="text" id="login" onChange={setLOginFn}/>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" onChange={setPasswordFn}/>
                </div>
                <NavLink type="submit" onClick={checkUserAccaunt} to="/">Enter</NavLink>
                <p>NavLink</p>
                <NavLink to="/createAccaunt">no accaunt</NavLink>
            {/* </form>     */}
        </main>
     );
};
 
export default MainLogin;