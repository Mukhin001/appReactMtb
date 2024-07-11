import st from './style.module.css';
import { useState, useRef } from 'react';

const PagePhotoFive = () => {
    const [countSlide, setCountSlide] = useState(1);
    const slideWrapper = useRef();
    const [addImgArr, setAddImgArr] = useState([]);

    function openImg(e) {
            //console.log(Array.isArray([...e.currentTarget.children]));
            //[...e.currentTarget.children].forEach(div => {
              //  slideWrapper.append([...e.currentTarget.children])
            //})
            let arr = [];
            [...e.currentTarget.children].forEach(div => {
                [...div.children].forEach(img => 
                    {
                        console.log(img.src)
                    arr.push(img.src)  
                    } 
                )
            })
            setAddImgArr(arr)
            
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

        <div className={st.sliderWrapper}>
            <button onClick={slideClickLeft} className={st.btn}>left</button>
            <div ref={slideWrapper} className={st.photoSlide}>
                {addImgArr.map((e, i) => {
                    console.log(e);
                   return   <div key={i}>
                                <img src={e} alt="i" />
                            </div>
                })}
                {/* <div className={`${st.slideImg} ${st.slideImgActive}`}>
                    bodyFon
                    <img src="../img/bodyFon.jpeg" alt="scale_1200" />
                </div>
                <div className={st.slideImg}>
                    dark-theme
                    <img src="../img/dark-theme.jpg" alt="ddvd" />
                </div>
                <div className={st.slideImg}>
                    scale_1200
                    <img src="../img/scale_1200.jpg" alt="ddvd" />
                </div>
                <div className={st.slideImg}>
                    shark
                    <img src="../img/shark.png" alt="ddvd" />
                </div> */}
                
            </div>
            <button onClick={slideClickRight} className={st.btn}>right</button>
        </div>
   </>    
     );
};
 
export default PagePhotoFive;