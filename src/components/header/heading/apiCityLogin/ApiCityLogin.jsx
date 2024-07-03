import City from "./city/City";
import Language from "./language/Language";
import Login from "./login/Login";
import Weather from "./weather/Weather";
import st from './style.module.css';
import { useState } from "react";

const ApiCityLogin = ({loginExit, linkExit}) => {
    const [city, setCity] = useState('Berlin');
    const [language, setLanguage] = useState('GER');
   // const [temp, setTemp] = useState();

    function getLanguage(value) {
        setLanguage(value);
    };

    function getCity(value) {
        setCity(value);
    };
 
    // function getTemp(value) {
    //     setTemp(value);
    // };

    return ( 
        <div className={st.ApiCityLogin}>
            <City languageFn={getLanguage} cityFn={getCity} city={city} />
            <Language propLanguage={language} />
            <Weather city={city} />
            <Login loginExit={loginExit} linkExit={linkExit} />
        </div>
     );
}
 
export default ApiCityLogin;