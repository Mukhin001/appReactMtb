import st from './style.module.css';
import {photoServer} from './photoServer';

const HtmlPhoto = ({name, sliderOpacity, closeSlider, addImgArr, imgActive, openImg, slideWrapper, slideClickLeft, slideClickRight, sliderWrapperLeft}) => {


    return ( 
        <>
            <div onClick={openImg} className={st.pagePhotoContainer}>
                {photoServer.map((elem) => {
                    return (
                        (elem.name === name) &&
                            elem.url.map((el, i) => {
                                return (
                                    <div className={st.pagePhotoImg} key={i}>
                                        <img src={el} alt={el.substring(26)} />
                                    </div>
                                )
                            }) 
                    )
                }     
            )
                }
            </div>
            {/* transform: translateX(-200%); */}
            <div style={{ left: `${sliderWrapperLeft}`, opacity: `${sliderOpacity}`}} className={st.sliderWrapper}>
                <div className={st.sliderContainer}>
                    <button onClick={slideClickLeft} className={st.btn}>left</button>
                    <div ref={slideWrapper} className={st.photoSlide}>
                        {
                        addImgArr.map(e => {
                                
                        return  (imgActive === e.src) 
                            ?
                                <div key={e.src.substring(26)} className={`${st.slideImg} ${st.slideImgActive}`}>
                                    <img src={e.src} alt={e.src.substring(26)} />
                                </div>  
                            :   
                                <div key={e.src.substring(26)} className={`${st.slideImg}`}>
                                    <img src={e.src} alt={e.src.substring(26)} />
                                </div>
                        }
                        )};
    
                    </div>
                    <button onClick={slideClickRight} className={st.btn}>right</button>
                </div>
                <button onClick={closeSlider} className={st.closeSlider}>close</button>
            </div> 
        </>    
     );
}
 
export default HtmlPhoto;