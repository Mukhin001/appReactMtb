import st from './style.module.css';
import { useState, useRef } from 'react';

const PagePhotoFive = () => {
    const [countSlide, setCountSlide] = useState(1);
    const slideWrapper = useRef();
    const [addImgArr, setAddImgArr] = useState([]);
    const [imgActive, setImgActive] = useState();
    const [sliderDisplay, setSliderDisplay] = useState('none');

    function openImg(e) {
        if(e.target.src) {
            setImgActive(e.target.src);
        }
        setSliderDisplay('flex');
        let arr = [];
            [...e.currentTarget.children].forEach(div => {
                [...div.children].forEach(img => 
                    {
                    arr.push(img)  
                    } 
                )
            });
        setAddImgArr(arr);
        document.body.style.overflow = 'hidden';
   
    };

    function closeSlider() {
        document.body.style.overflow = '';
        setSliderDisplay('none');
    };

    function slideClickLeft() {
        const arrSlide = [...slideWrapper.current.children];
        for(let i = 0; i < arrSlide.length; i++) { 
            arrSlide[i].classList.remove(st.slideImgActive); 
        };

            if(countSlide <= 0) {
                setCountSlide(arrSlide.length -1)
            } else {
                setCountSlide(countSlide - 1);
            }
        
        arrSlide[countSlide].classList.add(st.slideImgActive);

 
    };

    function slideClickRight() {
        const arrSlide = [...slideWrapper.current.children];
        for(let i = 0; i < arrSlide.length; i++) { 
            arrSlide[i].classList.remove(st.slideImgActive); 
        };

            if(countSlide >= arrSlide.length -1) {
                setCountSlide(0)
            } else {
                setCountSlide(countSlide + 1);
            }
        
        arrSlide[countSlide].classList.add(st.slideImgActive);

 
    };

    return ( 
        <>
        <div onClick={openImg}>
            <div className={st.pagePhotoImg}>
                bodyFon
                <img src="../img/bodyFon.jpeg" alt="scale_1200" />
            </div>
            <div className={st.pagePhotoImg}>
                dark-theme
                <img src="../img/dark-theme.jpg" alt="ddvd" />
           </div>
           <div className={st.pagePhotoImg}>
                scale_1200
                <img src="../img/scale_1200.jpg" alt="ddvd" />
           </div>
           <div className={st.pagePhotoImg}>
                shark
                <img src="../img/shark.png" alt="ddvd" />
           </div>
        </div>

        <div style={{display: `${sliderDisplay}`}} className={st.sliderWrapper}>
            <div className={st.sliderContainer}>
                <button onClick={slideClickLeft} className={st.btn}>left</button>
                <div ref={slideWrapper} className={st.photoSlide}>
                    {addImgArr.map(e => {

                    return  (imgActive === e.src) 
                        ?
                            <div key={e.src.substring(26)} className={`${st.slideImg} ${st.slideImgActive}`}>
                                <img src={e.src} alt={e.src.substring(26)} />
                            </div>  
                        :   
                            <div key={e.src.substring(26)} className={`${st.slideImg}`}>
                                <img src={e.src} alt={e.src.substring(26)} />
                            </div>
                    })};

                
                    
                </div>
                <button onClick={slideClickRight} className={st.btn}>right</button>
            </div>
            <button onClick={closeSlider} className={st.closeSlider}>close</button>
        </div>
   </>    
     );
};
 
export default PagePhotoFive;