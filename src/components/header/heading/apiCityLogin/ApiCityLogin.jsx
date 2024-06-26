import City from "./city/City";
import Language from "./language/Language";
import Login from "./login/Login";
import Weather from "./weather/Weather";
import st from './style.module.css';

const ApiCityLogin = () => {
    return ( 
        <div className={st.ApiCityLogin}>
            <City />
            <Language />
            <Weather />
            <Login />
        </div>
     );
}
 
export default ApiCityLogin;