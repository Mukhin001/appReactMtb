import { NavLink } from "react-router-dom";
import st from '../pagesMain/mainPhoto/pagesPhoto/style.module.css';
import { useRef, useEffect } from "react";

const MainFavorites = ({likes}) => {
    const imgRef = useRef(null);
    const slideDots = useRef(null);
 
    useEffect(() => {
        [...imgRef.current.children].forEach(li => {
         
            [...li.children[0].children[0].children][0].style.display = 'block';
            ([...li.children[0].children[0].children].slice(-1));
        });

        [...imgRef.current.children].forEach(li => {
            let coverDivImgCard = ([...li.children[0].children[0].children].slice(-1));
                coverDivImgCard.forEach(coverDivImg => {
                    
                    let dotsSlider = [...coverDivImg.children];
                        for(let i = 0; i < dotsSlider.length; i++) {
                            dotsSlider[i].addEventListener('mouseover', () => {
                                let imgSlider = [...dotsSlider[i].parentNode.parentNode.children].slice(0, -1);
                                imgSlider.forEach(img => img.style.display = 'none');
                                imgSlider[i].style.display = 'block';
                            });
                        };
                    coverDivImg.addEventListener('mouseout', (e) => {
                        let imgArr = [...e.target.parentNode.parentNode.children].slice(0, -1);
                            for(let i = 0; i < imgArr.length; i++) {
                                imgArr[i].style.display = 'none';
                                imgArr[0].style.display = 'block';
                            };
                    });
                });
        });
    });
    
    
    function deleteLike(e) {
       
        e.target.parentNode.parentNode.remove();

        for(let key in likes) {
            if(key === e.target.parentNode.parentNode.getAttribute('atrlike')) {
                delete likes[key];
            };
        };
    };

    return (
        <main>
            <div className={st.pagePhotosWrap}>
                Likes
                <ul ref={imgRef}>
                    {   Object.entries(likes).map(([key, value]) => {
                           
                            let imgMouseSlide = [...value.children[0].children[0].children].slice(0, -1);
                            return (
                                <li key={key} atrlike={key} className={st.photosImgLi}>
                                    <div style={{position: 'relative'}} >
                                        <NavLink to={ value.children[0].children[0].href.substring(21)}>
                                            {imgMouseSlide.map(img => { return (<img src={img.src} key={img.alt} alt={img.alt} />)})}

                                            <div ref={slideDots} className={st.gridHoverImg} style={{gridTemplateColumns: `repeat(${imgMouseSlide.length}, 1fr)`}}>
                                                {imgMouseSlide.map((img, i) => {
                                                    
                                                    return (<div className={st.slideTods} key={img.alt}>{i}</div>)
                                                })}
                                            </div>
                                        </NavLink>

                                        <h3 className={st.imgName}>{key}</h3>
                                    </div>

                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}><button onClick={deleteLike}>Delete</button></div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </main>
    )
};

export default MainFavorites;