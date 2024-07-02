import sendRequestServer from '../sendRequestServer';

const Weather = () => {
    const city = 'moscow';
    const key = '424138bd1df061d0694b6ebce42f3ff7';
    const weathertUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    sendRequestServer('GET', weathertUrl).then(data => console.log(data))


}
 
export default Weather;