import City from "./city/City";
import Language from "./language/Language";
import Login from "./login/Login";
import Weather from "./weather/Weather";
import st from './style.module.css';
import { useState } from "react";

const ApiCityLogin = () => {
    const [language, setLanguage] = useState('RU');

    function getLanguage(value) {
        setLanguage(value);
    };

    return ( 
        <div className={st.ApiCityLogin}>
            <City propLanguage={getLanguage}/>
            <Language propLanguage={language}/>
            <Weather />
            <Login />
        </div>
     );
}
 
export default ApiCityLogin;