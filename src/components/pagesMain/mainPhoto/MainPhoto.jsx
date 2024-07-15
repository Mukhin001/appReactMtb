import { Routes, Route} from 'react-router-dom';
import PagePhotos from './pagesPhoto/PagePhotos';
import PagePhotoOne from './pagesPhoto/PagePhotoOne';
import PagePhotoTwo from './pagesPhoto/PagePhotoTwo';
import PagePhotoThree from './pagesPhoto/PagePhotoThree';
import PagePhotoFour from './pagesPhoto/PagePhotoFour';
import PagePhotoFive from './pagesPhoto/PagePhotoFive';
import st from './pagesPhoto/style.module.css';

import { useState,  useRef} from 'react'; //
const MainPhoto = () => {
    const [sliderDisplay, setSliderDisplay] = useState('none'); //
    const [addImgArr, setAddImgArr] = useState([]);
    const [imgActive, setImgActive] = useState();
    const slideWrapper = useRef();
    const [countSlide, setCountSlide] = useState(1);

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

    function closeSlider() {   //
        document.body.style.overflow = '';
        setSliderDisplay('none');
        setAddImgArr([]);
    }; //

    function openImg(e) { //
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
    };   //
    
    return ( 
        <main>
               Photos!
              
               <Routes>
                         <Route path="/" element={<PagePhotos />} />
                         <Route path="/pagePhotoOne" element={<PagePhotoOne />} />
                         <Route path="/pagePhotoTwo" element={<PagePhotoTwo />} />
                         <Route path="/pagePhotoThree" element={<PagePhotoThree />} />
                         <Route path="/pagePhotoFour" element={<PagePhotoFour />} />
                         <Route path="/pagePhotoFive" element={<PagePhotoFive 
                            sliderDisplay={sliderDisplay} 
                            closeSlider={closeSlider}
                            addImgArr={addImgArr} 
                            imgActive={imgActive} openImg={openImg}
                            slideWrapper={slideWrapper}
                            slideClickLeft={slideClickLeft}
                            slideClickRight={slideClickRight}
                         />} />
               </Routes>
        </main>
     );
}
 
export default MainPhoto;