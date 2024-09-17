import { useState } from 'react';
import st from './style.module.css';
import { imgArrServer } from '../../../../../server/imgArrServer';

const SliderClickHome = () => {


    const [arrImgState, setArrImgState] = useState(imgArrServer);
    const [stopSlide, setStopSlide] = useState();

    function sliderClickLeft() {

        setArrImgState(prev => {
             return [...prev, prev[0]]
        });
 
        setArrImgState(prev => {
             return prev.slice(1)
        });
     };

    function slideClickPlay(elem) {        
        if(elem.target.innerText === 'play') {
            elem.target.innerText = 'stop';
            setStopSlide(setInterval(sliderClickLeft, 1000)); 
        } else {
            elem.target.innerText = 'play';
            clearInterval(stopSlide);
        }
    };

    function sliderClickRight() {

       setArrImgState(prev => {
            return [prev[prev.length -1], ...prev]
       });

       setArrImgState(prev => {
            return prev.slice(0, prev.length -1)
       });
    };

    return ( 
        <>
            <div className={st.sliderClickHome}> 
                <div className={st.wrapperBtnSliderClickHome}>
                    <button onClick={sliderClickLeft}>{' < left '}</button>
                    <button onClick={slideClickPlay}>play</button>
                    <button onClick={sliderClickRight}>{' right > '}</button>
                </div>
                <ul className={st.ulWrapperImg}>
                
                   {arrImgState.map(img => {
                        return (
                            <li className={st.wrapperImg} key={img}>
                                <img src={`./img/Стикеры/${img}`} alt={img} /> 
                                <span>{'<>'}</span>       
                            </li>
                        )
                   })}
                </ul>
            </div>
        </>
     );
};
 
export default SliderClickHome;