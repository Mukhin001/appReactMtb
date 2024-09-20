import { useEffect, useRef } from 'react';
import { imgArrServer } from '../../../../../server/imgArrServer';
import st from './style.module.css';
import { useState } from 'react';

const SliderMouseHome = ({ widthDisplay }) => {
    const ulWrapperRef = useRef();
    const li = useRef();
    const [ulWrapperImgLeft, setUlWrapperImgLeft] = useState(0);
    const [fullWidthtUl, setFullWidthUl] = useState(0);
    const [elementaryLeftWrapperUl, setElementaryLeftWrapperUl] = useState();
    const [transitionUl, setTransitionUl] = useState('none');
    const [state, setState] = useState(false);
    const [clickX, setClickX] = useState();

    useEffect(() => {
       //   console.log([...ulWrapperRef.current.children].length);
          
        const total = [...ulWrapperRef.current.children].reduce((acc, e) => {
            //acc  + e.offsetWidth;
            console.log(e.offsetWidth);
            
        } , 0);

        //console.log(total);
        
        setFullWidthUl(total);

        
        setElementaryLeftWrapperUl(ulWrapperRef.current.getBoundingClientRect().x);

    },[fullWidthtUl, elementaryLeftWrapperUl]);

    function sliderMouseLeft() {
 
        if(ulWrapperRef.current.getBoundingClientRect().x < -(fullWidthtUl - widthDisplay)) {
            setTransitionUl('ease 1.5s');
            setUlWrapperImgLeft(-(fullWidthtUl - widthDisplay));
        } else {
            setUlWrapperImgLeft(prev => {
                setTransitionUl('ease 0.5s');
                return +prev - 100;
              })    
        }
        
    };

    function sliderMouseRight() {
        if(ulWrapperRef.current.getBoundingClientRect().x > elementaryLeftWrapperUl) {
            setTransitionUl('ease 1.5s');
            setUlWrapperImgLeft(0);
        } else {
            setUlWrapperImgLeft(prev => {
                setTransitionUl('ease 0.5s');
                return +prev + 100; 
              });
        }
    };

    function onMouseDownUl(event) {   
        event.preventDefault(); // предотвратить запуск выделения (действие браузера)
        // координаты клик
        setClickX(event.clientX - ulWrapperRef.current.getBoundingClientRect().x);
        
        setState(true);
    };

    function onMouseMoveUl(event) {
        let newLeft = event.clientX - clickX - elementaryLeftWrapperUl; 
            setTransitionUl('none');
            setUlWrapperImgLeft(newLeft);
    };


    function onMouseUpUl() {
        setState(false);
       // console.log(fullWidthtUl);
        
        
        if(ulWrapperRef.current.getBoundingClientRect().x > elementaryLeftWrapperUl) {
            setUlWrapperImgLeft(0);
            setTransitionUl('ease 1.5s');
        } 
        else if(ulWrapperRef.current.getBoundingClientRect().x < -(fullWidthtUl - widthDisplay)) {
            setUlWrapperImgLeft(-(fullWidthtUl - widthDisplay));
            setTransitionUl('ease 1.5s'); 
 
        } 
    }; 

    return ( 
        <>
            <div > 
                <div className={st.wrapperBtnSliderClickHome}>
                    <button onClick={sliderMouseLeft}>{' < left '}</button>
                  
                    <button onClick={sliderMouseRight}>{' right > '}</button>
                </div>
                <div className={st.sliderMouseHome}>
                    <ul onMouseDown={onMouseDownUl} onMouseMove={state ? onMouseMoveUl : undefined} onMouseUp={onMouseUpUl} ref={ulWrapperRef} className={st.ulWrapperImg} style={{left: `${ulWrapperImgLeft}px`, transition: transitionUl}}>
                        {imgArrServer.map(img => {
                            return (
                                <li ref={li} className={st.wrapperImg} key={img}>
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