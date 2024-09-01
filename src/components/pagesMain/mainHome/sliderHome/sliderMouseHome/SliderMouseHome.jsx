import { useRef } from 'react';
import { imgArrServer } from '../../../../../server/imgArrServer';
import st from './style.module.css';
import { useState } from 'react';

const SliderMouseHome = () => {
    const ulWrapperRef = useRef();
    const wrapperDivRef = useRef();
    const [ulWrapperImgLeft, setUlWrapperImgLeft] = useState(0);

    function sliderMouseLeft() {
        if(ulWrapperRef.current.getBoundingClientRect().x < -1400) {
            setUlWrapperImgLeft(-1350);
        } else {
            setUlWrapperImgLeft(prev => {
                return +prev - 100;
              })    
        }
    };

    function sliderMouseRight() {
        if(ulWrapperRef.current.getBoundingClientRect().x > 170) {
            setUlWrapperImgLeft(0);
        } else {
            setUlWrapperImgLeft(prev => {
                return +prev + 100; 
              });
        }
    };

    function onMouseDownUl(event) {
        event.preventDefault(); // предотвратить запуск выделения (действие браузера)

        let clickX = event.clientX - ulWrapperRef.current.getBoundingClientRect().x;
        ulWrapperRef.current.addEventListener('mousemove', onMouseMoveUl);
        ulWrapperRef.current.addEventListener('mouseup', onMouseUpUl);

        function onMouseMoveUl(event) {
            
            let newLeft = event.clientX - clickX - wrapperDivRef.current.getBoundingClientRect().x;     

                if(ulWrapperRef.current.getBoundingClientRect().x > 170) {
                    setUlWrapperImgLeft(0);
                } else if(ulWrapperRef.current.getBoundingClientRect().x < -1400) {
                    setUlWrapperImgLeft(-1350);
                } else {
                    setUlWrapperImgLeft(newLeft);
                }
           
        };

        function onMouseUpUl() {
            ulWrapperRef.current.removeEventListener('mouseup', onMouseUpUl);
            ulWrapperRef.current.removeEventListener('mousemove', onMouseMoveUl);     
        };    
    };

    return ( 
        <>
            <div ref={wrapperDivRef} className={st.sliderMouseHome}> 
                <div className={st.wrapperBtnSliderClickHome}>
                    <button onClick={sliderMouseLeft}>{' < left '}</button>
                  
                    <button className={st.btnRight} onClick={sliderMouseRight}>{' right > '}</button>
                </div>
                <ul onMouseDown={onMouseDownUl} ref={ulWrapperRef} className={st.ulWrapperImg} style={{left: `${ulWrapperImgLeft}px`}}>
                
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