import { useEffect, useRef, useState } from 'react';
import { imgArrServerCarousel } from '../../../../../server/imgArrServer';
import st from './style.module.css';

const CarouselHome = () => {
    const carouselArr = imgArrServerCarousel.slice();
    const [left, setLeft] = useState(0);
    const [arr, setArr] = useState(carouselArr);
    const ulRef = useRef();
    const [widthUl, setWidthUl] = useState();
    
    useEffect(() => {
        const total = [...ulRef.current.children].reduce((acc, e) =>   {
            return  acc  + e.offsetWidth;
            
        } , 0);

        setWidthUl(total);
    }, []);

    function btnLeftClick() {
        setLeft(prev => prev + -100);
        
        arr.push(arr.shift());

            if(left < -widthUl / 2) {
                setLeft(0)
            }
            
        setArr(arr);
    };



    return ( 
        <div >  Carousel Home
            <div  className={st.wrapperBtnSliderClickHome}>
                <button onClick={btnLeftClick}>{' < left '}</button>
                
                <button >{' right > '}</button>
            </div>
            <div className={st.sliderMouseHome}>
                <ul ref={ulRef} className={st.ulWrapperImg} style={{left: `${left}px`}}>
                    {arr.map(img => {
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
     );
};
 
export default CarouselHome;