import { NavLink } from "react-router-dom";

const MainExit = ({loginExit, linkExit, enterAcc}) => {

    function exitFn() {
        enterAcc('the user did not log in');
        loginExit('Login');
        linkExit('/login');
    };

    return ( 
        <main>Do you Exit?
            <NavLink to="/bye" onClick={exitFn}>Yes</NavLink>
        </main>
     );
}
 
export default MainExit;