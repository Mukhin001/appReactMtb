import st from '.././style.module.css';
import {photoServer} from '../../../../../server/photoServer';
import mobile from '../../../../mobileFile/mobile.module.css';
import Comments from './comments/Comments';

import { useState,  useRef,  } from 'react';

const HtmlPhoto = ({name, userNameLogin}) => {
    const sliderWrapper = useRef();
    const [sliderOpacity, setSliderOpacity] = useState('0'); 
    const [addImgArr, setAddImgArr] = useState([]);
    const [imgActive, setImgActive] = useState();
    const photoSlide = useRef();
    const sliderTodsWrapper = useRef();
    const [countSlide, setCountSlide] = useState(1);
    const [sliderWrapperLeft, setSliderWrapperWidth] = useState('-100%');
    const [imgIndex, setImgIndex] = useState();

    function slideClickLeft() {
        const arrSlide = [...photoSlide.current.children];
        const arrTods = [...sliderTodsWrapper.current.children];
        if(arrSlide.length === 1) {
            return
        }
        for(let i = 0; i < arrSlide.length; i++) { 
            arrSlide[i].classList.remove(st.slideImgActive); 
            arrTods[i].classList.remove(st.todActive);
        };

            if(countSlide <= 0) {
                setCountSlide(arrSlide.length -1)
            } else {
                setCountSlide(countSlide - 1);
            }
        
        
        arrSlide[countSlide].classList.add(st.slideImgActive);
        arrTods[countSlide].classList.add(st.todActive);
 
    };

    function slideClickRight() {
        const arrSlide = [...photoSlide.current.children];
        const arrTods = [...sliderTodsWrapper.current.children];
        if(arrSlide.length === 1) {
            return
        }
        for(let i = 0; i < arrSlide.length; i++) { 
            arrSlide[i].classList.remove(st.slideImgActive); 
            arrTods[i].classList.remove(st.todActive);
        };

            if(countSlide >= arrSlide.length -1) {
                setCountSlide(0)
            } else {
                setCountSlide(countSlide + 1);
            }
        
        arrSlide[countSlide].classList.add(st.slideImgActive);
        arrTods[countSlide].classList.add(st.todActive);
    };


    function closeSlider() {   
        document.body.style.overflow = '';
        setSliderOpacity('0');
        setSliderWrapperWidth('-100%');
        setAddImgArr([]);
    };


    function openImg(e) { 
            
        if(e.target.src) {
            setImgActive(e.target.src);
            setSliderOpacity('1');
            setSliderWrapperWidth('0');
            setImgIndex(+e.target.getAttribute('index'))
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
        }
     
    };   
    
         
    function closeSliderBackGound(elem) {
        
        if(elem.target === sliderWrapper.current || elem.target === photoSlide.current) {
            closeSlider();
        }  
    };

    function onKeyDownFn(key) {
        if(key.key === 'Escape') {
            closeSlider();
        } else if(key.key === 'ArrowLeft') {
            slideClickLeft();
        } else if(key.key === 'ArrowRight') {
            slideClickRight();
        }
    };

    function clickSliderTod(elem) {
        const arrSlide = [...photoSlide.current.children];
        const arrTods = [...sliderTodsWrapper.current.children];
        
        if(arrSlide.length === 1) {
            return
        }

        for(let i = 0; i < arrSlide.length; i++) { 
            arrSlide[i].classList.remove(st.slideImgActive);
            arrTods[i].classList.remove(st.todActive); 
        };
        
        arrSlide[+elem.target.getAttribute('index')].classList.add(st.slideImgActive);
        arrTods[+elem.target.getAttribute('index')].classList.add(st.todActive);
    };

    return ( 
        <div className='htmlPhoto'>
            <div onClick={openImg} tabIndex={1} onKeyDown={onKeyDownFn} className={`${st.pagePhotoContainer} ${mobile.pagePhotoContainer}`}>
                { photoServer.map((elem) => {
                    
                    return (
                        (elem.name === name) &&
                            elem.url.map((el, i) => {
                                return (
                                    <div className={st.pagePhotoImg} key={i}>
                                        <img src={el} alt={el.substring(26)} index={i}/>
                                    </div>
                                )
                            }) 
                    )
                }     
            )
                }
            </div>
            
            <div ref={sliderWrapper} onClick={closeSliderBackGound} style={{ left: `${sliderWrapperLeft}`, opacity: `${sliderOpacity}`}} className={st.sliderWrapper}>

                <button onClick={closeSlider} className={st.closeSlider}>close</button>

                <div className={st.sliderContainer}>
                    <button onClick={slideClickLeft} tabIndex={1} onKeyDown={onKeyDownFn} className={`${st.btnSlide} ${st.btnSlideLeft}`}>left</button>
                    <div ref={photoSlide} className={st.photoSlide}>
                        
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
                        )}
                        
                    </div>
                    <button onClick={slideClickRight} tabIndex={1} onKeyDown={onKeyDownFn} className={`${st.btnSlide} ${st.btnSlideRight}`}>right</button>
                </div>

                <div tabIndex={1} onKeyDown={onKeyDownFn} ref={sliderTodsWrapper}> {addImgArr.map((e, i) => {
                         return(
                            (imgIndex === i)
                            ? 
                            <span index={i} onClick={clickSliderTod} className={`${st.btnSliderTods} ${st.todActive}`} key={e.src.substring(36) + i}> {i + 1} {e.src.slice(26, -5)}</span>
                            :
                            <span index={i} onClick={clickSliderTod} className={`${st.btnSliderTods}`} key={e.src.substring(36) + i}> {i + 1} {e.src.slice(26, -5)}</span>   
                        )
                    })} 
                </div>
                
            </div> 

            <div className='descriptonTable'>
                {photoServer.map(obj => {
                    return (
                        (obj.name === name) && 
                            <table key={obj.name + 'descriptionCard'}>
                                <caption>{obj.name}</caption>
                                <thead>
                                
                                    <tr>
                                        <th>parth</th>
                                        <th>brand</th>
                                    </tr>
                                </thead>

                                <tbody>
                                        {Object.keys(obj.descriptionCard).map(key => {
                                            return ( 
                                            <tr key={key + 'discription'}>
                                                <th>{key}</th>
                                                <td>{obj.descriptionCard[key]}</td> 
                                            </tr>
                                        )})}
                                </tbody>

                                <tfoot>
                                    <tr>
                                        <th>quantity</th>
                                        <td>{Object.keys(obj.descriptionCard).length}</td>
                                    </tr>
                                </tfoot>
                            </table>
                    )
                })}
            </div>

            <Comments name={name} userNameLogin={userNameLogin}></Comments>

        </div>    
     )
};
 
export default HtmlPhoto;