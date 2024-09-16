import { useEffect, useRef } from 'react';
import { imgArrServer } from '../../../../../server/imgArrServer';
import st from './style.module.css';
import { useState } from 'react';

const SliderMouseHome = ({ widthDisplay }) => {
    const ulWrapperRef = useRef();
    const wrapperUlMouse = useRef();
    const [ulWrapperImgLeft, setUlWrapperImgLeft] = useState(0);
    const [fullWidthtUl, setFullWidthUl] = useState();

    useEffect(() => {
        let width = 0;
        [...ulWrapperRef.current.children].forEach(li => {
            width += li.offsetWidth;
        });
        setFullWidthUl(width);
    });
    
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
        //console.log(ulWrapperRef.current.getBoundingClientRect().x);
        event.preventDefault(); // предотвратить запуск выделения (действие браузера)

        let clickX = event.clientX - ulWrapperRef.current.getBoundingClientRect().x;
        //let shiftX = event.clientX - thumb.getBoundingClientRect().left;
       
        
        // ulWrapperRef.current.addEventListener('mousemove', onMouseMoveUl);
        // ulWrapperRef.current.addEventListener('mouseup', onMouseUpUl);
        document.addEventListener('mousemove', onMouseMoveUl);
        document.addEventListener('mouseup', onMouseUpUl);

        function onMouseMoveUl(event) {
            let elementaryLeftWrapperUl = wrapperUlMouse.current.getBoundingClientRect().x;
            let newLeft = event.clientX - clickX - elementaryLeftWrapperUl; 
            let offSetLeftUl = widthDisplay - wrapperUlMouse.current.getBoundingClientRect().width;
            
            //console.log(ulWrapperRef.current.getBoundingClientRect().x);
            //console.log( );
            
    
                if(ulWrapperRef.current.getBoundingClientRect().x > elementaryLeftWrapperUl) {
                    setUlWrapperImgLeft(0);
                } 
                else if(ulWrapperRef.current.getBoundingClientRect().x < -(fullWidthtUl - widthDisplay)) {
                    setUlWrapperImgLeft(-(fullWidthtUl - widthDisplay));
                } 
                 else {
                    setUlWrapperImgLeft(newLeft);
                 }
        };

        function onMouseUpUl() {
            // ulWrapperRef.current.removeEventListener('mouseup', onMouseUpUl);
            // ulWrapperRef.current.removeEventListener('mousemove', onMouseMoveUl);  
            document.removeEventListener('mouseup', onMouseUpUl);
            document.removeEventListener('mousemove', onMouseMoveUl);       
        };    
    };

    return ( 
        <>
            <div > 
                <div className={st.wrapperBtnSliderClickHome}>
                    <button onClick={sliderMouseLeft}>{' < left '}</button>
                  
                    <button className={st.btnRight} onClick={sliderMouseRight}>{' right > '}</button>
                </div>
                <div  ref={wrapperUlMouse} className={st.sliderMouseHome}>
                    <ul onMouseDown={onMouseDownUl} ref={ulWrapperRef} className={st.ulWrapperImg} style={{left: `${ulWrapperImgLeft}px`}}>
                        {imgArrServer.map(img => {
                            return (
                                <li className={st.wrapperImg} key={img}>
                                    <img src={`./img/Стикеры/${img}`} alt={img} /> 
                                    <span>{'<>'}</span>       
                                </li>
                            )
                        })}
                    </ul>        
                </div>
            </div>
        </>
     );
};
 
export default SliderMouseHome;