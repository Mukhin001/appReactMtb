import { useRef } from 'react';
import { imgArrServer } from '../../../../../server/imgArrServer';
import st from './style.module.css';
import { useState } from 'react';

const SliderMouseHome = () => {
    const ulWrapperImg = useRef();
    const [ulWrapperImgLeft, setUlWrapperImgLeft] = useState(0);
    const [downMouse, setDownMouse] = useState();
    const [upMouse, setUpMouse] = useState();
    //const [moveMouse, setMoveMouse] = useState();

    function sliderMouseLeft() {
        if(ulWrapperImg.current.getBoundingClientRect().x > 21) {
            return
        } else {
            setUlWrapperImgLeft(prev => {
                return +prev + 100;
              })    
        }
    };

    function sliderMouseRight() {
        if(ulWrapperImg.current.getBoundingClientRect().x < -1800) {
            return
        } else {
            setUlWrapperImgLeft(prev => {
                return +prev - 100; 
              });
        }
    };

    function onMouseDownUpUl(event) {
        
        if(event.type === 'mousedown') {
            setDownMouse(event.clientX);
            event.preventDefault();

        } else if (event.type === 'mouseup') {
            setUpMouse(event.clientX);
        }

        if(downMouse - upMouse > 0) {
            console.log(downMouse - upMouse);
            setUlWrapperImgLeft(prev => {
                return +prev - (downMouse - upMouse); 
              });
        } else if(downMouse - upMouse < 0) {
            console.log(downMouse - upMouse);
            setUlWrapperImgLeft(prev => {
                return +prev + (downMouse - upMouse); 
              });
        }
    };



    return ( 
        <>
            <div className={st.sliderMouseHome}> 
                <div className={st.wrapperBtnSliderClickHome}>
                    <button onClick={sliderMouseLeft}>{' < left '}</button>
                  
                    <button className={st.btnRight} onClick={sliderMouseRight}>{' right > '}</button>
                </div>
                <ul onMouseDown={onMouseDownUpUl} onMouseUp={onMouseDownUpUl} ref={ulWrapperImg} className={st.ulWrapperImg} style={{left: `${ulWrapperImgLeft}px`}}>
                
                   {imgArrServer.map((img, i) => {
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
 
export default SliderMouseHome;