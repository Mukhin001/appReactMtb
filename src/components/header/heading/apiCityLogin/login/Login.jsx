import { NavLink } from "react-router-dom";

const Login = ({loginExit, linkExit}) => {
   

    return ( 
        <div>
           <NavLink to={linkExit}>{loginExit}</NavLink>
        </div>
     );
};
 
export default Login;