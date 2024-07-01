import { joinPaths } from "@remix-run/router";
import { json } from "react-router-dom";

const Weather = () => {
    const city = 'moscow';
    const key = '424138bd1df061d0694b6ebce42f3ff7';
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    // const promise = new Promise(function(resolve, reject) {

    //     resolve(api);
    //     reject(console.log('error'))
    // });
    // promise.then((data) => {
    //    return json(data);
    // }).then((data) => {
    //     console.log(json(data));
    // });
    const weatherApi = fetch(api);
    weatherApi.then((data) => {
       return data.json()
    }).then((data) => {
        console.log(data);
    })
    return ( 
        <div>
            Weather
        </div>
     );
}
 
export default Weather;