import { useState } from 'react';
import st from './style.module.css';


const SliderHome = () => {
    let arrImg = ['Sticker-0.png', 'Sticker-1.png', 'Sticker-2.png', 'Sticker-3.png', 'Sticker-4.png', 'Sticker-5.png', 'Sticker-6.png',
        'Sticker-7.png', 'Sticker-8.png', 'Sticker-9.png', 'Sticker-10.png', 'Sticker-11.png', 'Sticker-12.png', 'Sticker-13.png', 'Sticker-14.png',
        'Sticker-15.png', 'Sticker-16.png', 'Sticker-17.png', 'Sticker-18.png', 'Sticker-19.png',
    ];

    const [arrImgState, setArrImgState] = useState(arrImg);
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
            <div className={st.sliderHome}>
                <div className={st.wrapperBtnSlideHome}>
                    <button onClick={sliderClickLeft}>{' < left '}</button>
                    <button onClick={slideClickPlay}>play</button>
                    <button onClick={sliderClickRight}>{' right > '}</button>
                </div>
                <ul className={st.ulWrapperImg}>
                
                   {arrImgState.map((img, i) => {
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
 
export default SliderHome;