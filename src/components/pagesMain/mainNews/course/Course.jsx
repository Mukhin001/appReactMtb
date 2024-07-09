import sendRequestServer from '../../../../sendRequestServer';
import { useState } from 'react';

const Course = () => {
    const [date, setDate] = useState('');
    const [charCodEUR, setCharCodeEUR] = useState('');
    const [nameEUR, setNameEUR] = useState('');
    const [valueEUR, setValueEUR] = useState('');
    const [charCodUSD, setCharCodeUSD] = useState('');
    const [nameUSD, setNameUSD] = useState('');
    const [valueUSD, setValueUSD] = useState('');

    sendRequestServer('GET', 'https://www.cbr-xml-daily.ru/daily_json.js')
    .then((d) => {
       // (d.Date, d.Valute.EUR.CharCode, d.Valute.EUR.Name, d.Valute.EUR.Value);
        setDate(d.Date);
        setCharCodeEUR(d.Valute.EUR.CharCode);
        setNameEUR(d.Valute.EUR.Name);
        setValueEUR(d.Valute.EUR.Value);
        setCharCodeUSD(d.Valute.USD.CharCode);
        setNameUSD(d.Valute.USD.Name);
        setValueUSD(d.Valute.USD.Value);
    })
    .catch((d) => console.log(d, 'error'))
console.log();
    return ( 
        <div>
            <p>date {date.substring(0, 10)}</p>
            <p>time {date.substring(11, 19)}</p>
            <ul>
                <li>{charCodEUR} {nameEUR} {Number(valueEUR).toFixed(2)}</li>
                <li>{charCodUSD} {nameUSD} {Number(valueUSD).toFixed(2)}</li> 
            </ul>
        </div>
     );
}
 
export default Course;