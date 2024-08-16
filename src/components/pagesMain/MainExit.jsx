import { NavLink } from "react-router-dom";

const MainExit = ({getLoginFn, linkExitFn, enterAcc}) => {

    function exitFn() {
        enterAcc('anonimus');
        getLoginFn('Login');
        linkExitFn('/login');
    };

    return ( 
        <main>Do you Exit?
            <NavLink to="/bye" onClick={exitFn}>Yes</NavLink>
        </main>
     );
};
 
export default MainExit;