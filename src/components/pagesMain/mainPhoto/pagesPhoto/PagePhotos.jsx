import { NavLink } from "react-router-dom";
import st from './style.module.css';
import { photoServer } from './photoServer';
import { useRef, useEffect } from "react";


const PagePhotos = ({getLikesFn}) => {
    const imgRef = useRef(null);
    const slideDots = useRef(null);
 
    function getLikes(e) {
        //console.log(e.target.parentNode.parentNode);
        getLikesFn(e.target.parentNode.parentNode);
    };

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

    return ( 
        <div className={st.pagePhotosWrap}>
            <div>
                <label htmlFor="sort"></label>
                <select id="sort">
                    <option value='comment'>comment</option>
                    <option value='date'>date</option>
                </select>
            </div>
            <ul ref={imgRef}>
                {photoServer.map((obj) => {
                    
                    return (
                        <li atrlike={obj.name} namephoto={obj.name} className={st.photosImgLi} key={obj.name}>
                            <div style={{position: 'relative'}} >
                                <NavLink to={`/photo/${obj.name}`}>
                               
                                {obj.url.map(url => {
                                    return ( <img src={url} key={url} alt={url.substring(26)} /> )})}
                                <div ref={slideDots} className={st.gridHoverImg} style={{gridTemplateColumns: `repeat(${obj.url.length}, 1fr)`}}>
                                    {obj.url.map((url, i) => {
                                        return (<div className={st.slideTods} key={url.substring(2)}>{i}</div>)
                                    })}
                                </div>
                                
                                </NavLink>
                                <h3 className={st.imgName}>{obj.name}</h3>
                                
                            </div>
                            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <div>
                                    <div>comment 26</div>
                                    <div>date 26.05.2022</div>
                                </div>
                                <button onClick={getLikes}>Likes</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
     );
};
 
export default PagePhotos;