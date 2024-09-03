import City from "./city/City";
import Language from "./language/Language";
import Login from "./login/Login";
import Weather from "./weather/Weather";
import st from './style.module.css';
import { useState } from "react";
import Favorites from "./favorites/Favorites";
import SelectCity from "./selectCity/SelectCity";

const ApiCityLogin = ({loginExit, linkExit}) => {
    const [city, setCity] = useState('Berlin');
    const [language, setLanguage] = useState('GER');
    //const [temp, setTemp] = useState();

    function getLanguage(value) {
        setLanguage(value);
    };

    function getCity(value) {
        setCity(value);
    };
 
    // function getTemp(value) {
    //     setTemp(value);
    // };
    function getSelectCityValue(select) {
        setCity(select.target.value);
    };

    return ( 
        <div className={st.ApiCityLogin}>
            <Favorites />
            <SelectCity getSelectCityValue={getSelectCityValue}/>
            <City languageFn={getLanguage} cityFn={getCity} city={city} />
            <Language propLanguage={language} />
            <Weather city={city} />
            <Login loginExit={loginExit} linkExit={linkExit} />
        </div>
     );
};
 
export default ApiCityLogin;