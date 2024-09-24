import { imgArrServerCarousel } from '../../../../../server/imgArrServer';
import st from './style.module.css';

const CarouselHome = () => {
    return ( 
        <div >  Carousel Home
            <div  className={st.wrapperBtnSliderClickHome}>
                <button >{' < left '}</button>
                
                <button >{' right > '}</button>
            </div>
            <div className={st.sliderMouseHome}>
                <ul className={st.ulWrapperImg}>
                    {imgArrServerCarousel.map(img => {
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