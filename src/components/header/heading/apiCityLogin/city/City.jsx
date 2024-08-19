//import st from './style.module.css';
import sendRequestServer from '../../../../../server/sendRequestServer';

//  `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
const City = ({languageFn, cityFn, city}) => {

    function findLocation() {
        if(!navigator.geolocation) {
            console.log('not supported browser');
            cityFn('not supported browser');
            languageFn('not supported browser');
        } else {
            navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
        }

        function successLocation(position) {
            const { latitude, longitude } = position.coords;

            sendRequestServer('GET', `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
            .then((data) => {
                cityFn(data.city);
                languageFn(data.countryCode);
            }).catch(() => {
                cityFn('error city');
                languageFn('error language');
                console.log('error api');
            })
        };

        // если пользовать отклонил или сервер 
        function errorLocation() {
            console.log('error position');
        };
    };
    findLocation();
    
    return ( 
        <div>
            {city}
        </div>
     );
}
 
export default City;