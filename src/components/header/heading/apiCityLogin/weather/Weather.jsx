import sendRequestServer from '../../../../../server/sendRequestServer';
import { useState } from 'react';

const Weather = ({city}) => {
    const [temp, setTemp] = useState();
   
    const key = '424138bd1df061d0694b6ebce42f3ff7';
    const weathertUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${key}`;
    // https://api.openweathermap.org/data/2.5/weather?units=metric&q=${moscow}&appid=${424138bd1df061d0694b6ebce42f3ff7}
    sendRequestServer('GET', weathertUrl)
    .then(data => setTemp(data.main.temp))
    .catch(() => setTemp('error weather'))
    //data.rain data.show
    return (
        <div>{!isNaN(temp) ? Math.round(temp) + 'C' : temp}</div>
    );
};
 
export default Weather; 