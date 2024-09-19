import { useEffect, useRef } from 'react';
import { imgArrServer } from '../../../../../server/imgArrServer';
import st from './style.module.css';
import { useState } from 'react';

const SliderMouseHome = ({ widthDisplay }) => {
    const ulWrapperRef = useRef();
    const wrapperUlMouse = useRef();
    const [ulWrapperImgLeft, setUlWrapperImgLeft] = useState(0);
    const [fullWidthtUl, setFullWidthUl] = useState();
    const [elementaryLeftWrapperUl, setElementaryLeftWrapperUl] = useState();
    const [transitionUl, setTransitionUl] = useState('none');

    useEffect(() => {
        let width = 0;
        [...ulWrapperRef.current.children].forEach(li => {
            width += li.offsetWidth;
        });
        setFullWidthUl(width);
        setElementaryLeftWrapperUl(wrapperUlMouse.current.getBoundingClientRect().x);
    },[]);

    useEffect(() => {
        const ul = ulWrapperRef.current;
        let clickX;

        function onMouseDownFn(event) {

       
            //console.log(event);
            
            clickX = event.clientX - ulWrapperRef.current.getBoundingClientRect().x;

            ul.addEventListener('mousemove', onMouseMoveUl);
            ul.addEventListener('mouseup', onMouseUpUl);
            event.preventDefault();
        };

        function onMouseMoveUl(event) {
            let newLeft = event.clientX - clickX - elementaryLeftWrapperUl; 
            setTransitionUl('none');
            setUlWrapperImgLeft(newLeft);
        };

        function onMouseUpUl() {
            if(ul.getBoundingClientRect().x > elementaryLeftWrapperUl) {
                setUlWrapperImgLeft(0);
                setTransitionUl('ease 1.5s');
            } 
            else if(ul.getBoundingClientRect().x < -(fullWidthtUl - widthDisplay)) {
                setUlWrapperImgLeft(-(fullWidthtUl - widthDisplay));
                setTransitionUl('ease 1.5s'); 
            }  
            ul.removeEventListener('mousemove', onMouseMoveUl);
            
        };

        ul.addEventListener('mousedown', onMouseDownFn);

        return () => {
            ul.removeEventListener('mousedown', onMouseDownFn);
            ul.removeEventListener('mouseup', onMouseUpUl);
        };

    }, [elementaryLeftWrapperUl, fullWidthtUl, widthDisplay]);

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
    


    return ( 
        <>
            <div > 
                <div className={st.wrapperBtnSliderClickHome}>
                    <button onClick={sliderMouseLeft}>{' < left '}</button>
                  
                    <button onClick={sliderMouseRight}>{' right > '}</button>
                </div>
                <div  ref={wrapperUlMouse} className={st.sliderMouseHome}>
                    {/* onMouseDown={onMouseDownUl} */}
                    <ul   ref={ulWrapperRef} className={st.ulWrapperImg} style={{left: `${ulWrapperImgLeft}px`, transition: transitionUl}}>
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

    // function onMouseDownUl(event) {
            
    //      event.preventDefault(); // предотвратить запуск выделения (действие браузера)

    //      let clickX = event.clientX - ulWrapperRef.current.getBoundingClientRect().x;

    //     ulWrapperRef.current.addEventListener('mousemove', onMouseMoveUl);
    //     ulWrapperRef.current.addEventListener('mouseup', onMouseUpUl);

    //     function onMouseMoveUl(event) {

    //         let newLeft = event.clientX - clickX - elementaryLeftWrapperUl; 
    //         setTransitionUl('none');
    //         setUlWrapperImgLeft(newLeft);
    //     };

    //     function onMouseUpUl() {
            
    //         if(ulWrapperRef.current.getBoundingClientRect().x > elementaryLeftWrapperUl) {
    //             setUlWrapperImgLeft(0);
    //             setTransitionUl('ease 1.5s');
    //         } 
    //         else if(ulWrapperRef.current.getBoundingClientRect().x < -(fullWidthtUl - widthDisplay)) {
    //             setUlWrapperImgLeft(-(fullWidthtUl - widthDisplay));
    //             setTransitionUl('ease 1.5s'); 
    //         }  
    //         ulWrapperRef.current.removeEventListener('mouseup', onMouseUpUl);
    //         ulWrapperRef.current.removeEventListener('mousemove', onMouseMoveUl);       
    //     };    
    // };