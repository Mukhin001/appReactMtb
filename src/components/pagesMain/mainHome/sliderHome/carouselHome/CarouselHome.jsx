import { useRef, useState } from 'react';
import { imgArrServerCarousel } from '../../../../../server/imgArrServer';
import st from './style.module.css';

const CarouselHome = () => {
    const carouselArr = imgArrServerCarousel.slice(0, 5);
    const arrLength = carouselArr.length;
    const [left, setLeft] = useState(-300);
    const [arr, setArr] = useState(carouselArr);
    const [a, setA] = useState(arr.slice(-2));
    const ulRef = useRef();
    const [widthUl, setWidthUl] = useState();
    const [currentClick, setCurrentClick] = useState(0);
   const [currentArr, setCurrentArr] = useState(0);
    
    // useEffect(() => {
    //     const total = [...ulRef.current.children].reduce((acc, e) =>   {
    //         return  acc  + e.offsetWidth;
            
    //     } , 0);

    //     setWidthUl(total);
    // }, []);

    function btnLeftClick() {
        setArr(prev => [...prev, ...a]);
        setCurrentClick(prev => prev + 1);
        setLeft(prev => prev - 100);
        
    };

    function btnRightClick() {
        setArr(prev => [...a, ...prev]);
        setCurrentClick(prev => prev + 1);
        setLeft(prev => prev - 200);
        
    };


    return ( 
        <div >  Carousel Home
            <div  className={st.wrapperBtnSliderClickHome}>
                <button onClick={btnLeftClick}>{' < left '}</button>
                
                <button onClick={btnRightClick} >{' right > '}</button>
            </div>
            <div className={st.sliderMouseHome}>
                <ul ref={ulRef} className={st.ulWrapperImg} style={{ transition: 'ease 1.5s', left: `${left}px`}}>
                    {arr.map((img, i) => {
                        return (
                            <li className={st.wrapperImg} key={img + i}>
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