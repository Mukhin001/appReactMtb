import React, { useEffect, useRef } from 'react';
import { imgArrServer } from '../../../../../server/imgArrServer';
import st from './style.module.css';
import { useState } from 'react';

const SliderMouseHome = ({ widthDisplay }) => {
    const ulRef = useRef();
    const wrapperBtnSliderClickHome = useRef();
    const [ulLeft, setUlLeft] = useState(0);
    const [fullWidthtUl, setFullWidthUl] = useState();
    const [elementaryLeftUl, setElementaryLefUl] = useState();
    const [heigth, setHeight] = useState();
    const [transitionUl, setTransitionUl] = useState('none');
    const [state, setState] = useState(false);
    const [mouseDownClientX, setMouseDownClientX] = useState();

    useEffect(() => {

        const total = [...ulRef.current.children].reduce((acc, e) =>   {
            return  acc  + e.offsetWidth;
            
        } , 0);
        
        setFullWidthUl(total);
        
        setElementaryLefUl(ulRef.current.getBoundingClientRect().x);
        setHeight(ulRef.current.getBoundingClientRect().height + wrapperBtnSliderClickHome.current.getBoundingClientRect().height);
        
    }, []);

    // useEffect(() => {
    //     setElementaryLefUl(ulRef.current.getBoundingClientRect().x);
    // }, [elementaryLeftUl]);

    // useEffect(() => {
    //     function mouseDownFn(event) {
    //         event.preventDefault();
    //         setClickX(event.clientX - ulRef.current.getBoundingClientRect().x);
    //         ulRef.current.addEventListener('mousemove', mouseDownFn);
    //         ulRef.current.addEventListener('mousedown', mouseDownFn);
    //     };

    //     function mouseMoveFn(event) {
    //         //let newLeft = event.clientX - clickX - elementaryLeftWrapperUl; 
    //         setTransitionUl('none');
    //         setUlWrapperImgLeft(event.clientX - clickX - elementaryLeftWrapperUl);
    //     };

    //     function mouseUpFn() {
    //         if(elementaryLeftWrapperUl < 0) {
    //         setUlWrapperImgLeft(0);
    //         setTransitionUl('ease 1.5s');
    //         console.log(1);
            
    //         } 
    //         else if(elementaryLeftWrapperUl < -(fullWidthtUl - widthDisplay)) {
    //             setUlWrapperImgLeft(-(fullWidthtUl - widthDisplay));
    //             setTransitionUl('ease 1.5s'); 
    //             console.log(2);
                
    
    //         } 

    //         ulRef.current.removeEventListener('mousedown', mouseDownFn);
    //         ulRef.current.removeEventListener('mouseup', mouseUpFn);
    //         ulRef.current.removeEventListener('mousemove', mouseMoveFn);
    //     };
        
    //     ulRef.current.addEventListener('mouseup', mouseUpFn);
    // });

    function sliderMouseLeft() {
 
        if(ulRef.current.getBoundingClientRect().x < -(fullWidthtUl - widthDisplay)) {
            setTransitionUl('ease 1.5s');
            setUlLeft(-(fullWidthtUl - widthDisplay) - 150);
        } else {
            setUlLeft(prev => +prev - 100);
            setTransitionUl('ease 0.5s');    
        }
    };

    function sliderMouseRight() {
        if(ulRef.current.getBoundingClientRect().x > elementaryLeftUl) {
            setTransitionUl('ease 1.5s');
            setUlLeft(0);
        } else {
            setUlLeft(prev => +prev + 100);
            setTransitionUl('ease 0.5s');
        }
    };
    

    function onMouseDownUl(event) {   
        event.preventDefault(); // предотвратить запуск выделения (действие браузера)
        
        // координаты клик
        setMouseDownClientX(event.clientX - ulRef.current.getBoundingClientRect().x);
        setState(true);
        setTransitionUl('none');
    };

    function onMouseMoveUl(event) {
        setUlLeft(event.clientX - mouseDownClientX - elementaryLeftUl);     
    };


    function onMouseUpUl() {
        setState(false);

        if(ulRef.current.getBoundingClientRect().x > elementaryLeftUl) {
            setUlLeft(0);
            setTransitionUl('ease 1.5s');
        } 
        else if(ulRef.current.getBoundingClientRect().x < -(fullWidthtUl - widthDisplay)) {
            setUlLeft(-(fullWidthtUl - widthDisplay) - 150);
            setTransitionUl('ease 1.5s'); 
        } 
    }; 

    return ( 
        <div style={{height: `${heigth + 30}px`,}}>  Slider Mouse Home
            <div ref={wrapperBtnSliderClickHome} className={st.wrapperBtnSliderClickHome}>
                <button onClick={sliderMouseLeft}>{' < left '}</button>
                
                <button onClick={sliderMouseRight}>{' right > '}</button>
            </div>
            <div className={st.sliderMouseHome}>
                <ul onMouseDown={onMouseDownUl} onMouseMove={state ? onMouseMoveUl : undefined} onMouseUp={onMouseUpUl}  ref={ulRef} className={st.ulWrapperImg} style={{left: `${ulLeft}px`, transition: transitionUl}}>
                    {imgArrServer.map(img => {
                        return (
                            <li className={st.wrapperImg} key={img}>
                                <img src={`./img/Стикеры/${img}`} alt={img} /> 
                                <span style={{position: 'absolute',}}>{'<>'}</span>       
                            </li>
                        )
                    })}
                </ul>        
            </div>
        </div>
     );
};
 
export default SliderMouseHome;