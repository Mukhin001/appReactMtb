import { useState } from "react";
//import { useRef } from "react"; ref={mapRef} 
//import st from './style.module.css';
import sendRequestServer from '../sendRequestServer';

//  `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
const City = ({propLanguage}) => {
    const [city, setCity] = useState('Moscow');
    // const [language, setLanguage] = useState('RU');
    // const [country, setCountry] = useState('Russian Federation');
    //const mapRef = useRef();
     //const [mapUrl, setMapUrl] = useState();

    function findLocation() {
        if(!navigator.geolocation) {
            console.log('error location');
        } else {
            navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
        }

        function successLocation(position) {
            const { latitude, longitude } = position.coords;
            console.log(latitude, longitude, 'success location');
            //setMapUrl(`https://www.openstreetmap.org/export/embed.html?bbox=${longitude}%2C${latitude}&amp;layer=mapnik`);


            sendRequestServer('GET', `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
            .then((data) => {
                setCity(data.city);
                propLanguage(data.countryCode);
                //setCountry(data.countryName);
            });
        };

        function errorLocation() {
            console.log('yuor location no find.');
        }
    };
    findLocation();
    
    return ( 
        <div>
            {city}
           {/* <iframe src={mapUrl} title="map"  id="map">map iframe</iframe> */}
        </div>
     );
}
 
export default City;