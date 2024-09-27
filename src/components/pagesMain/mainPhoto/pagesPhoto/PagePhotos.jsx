import { NavLink } from "react-router-dom";
import st from './style.module.css';
import mobile from '../../../mobileFile/mobile.module.css';
import { photoServer } from '../../../../server/photoServer';
import { useRef, useEffect } from "react";


const PagePhotos = ({getLikesFn}) => {
    const imgRef = useRef(null);
    const slideDots = useRef(null);
 
    function getLikes(e) {
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
    }, []);

    function sortedCardData(select) {
        if(select.target.value === 'date') {
            const sortedDateCard = [...imgRef.current.children].sort((a, b) => new Date(a.getAttribute('data-datecard').split(' ').reverse().join('-')) - new Date(b.getAttribute('data-datecard').split(' ').reverse().join('-')));

            for(let i = 0; i < sortedDateCard.length; i++) {
                imgRef.current.insertBefore(sortedDateCard[i], [...imgRef.current.children][i])
            };
        } else if(select.target.value === 'comments') {
            const sortedDateCard = [...imgRef.current.children].sort((a, b) => b.getAttribute('data-comments') - a.getAttribute('data-comments'));

            for(let i = 0; i < sortedDateCard.length; i++) {
                imgRef.current.insertBefore(sortedDateCard[i], [...imgRef.current.children][i])
            };
        }
    };

    return ( 
        <div className={`${st.pagePhotosWrap} ${mobile.pagePhotosWrap}`}>
            <div>
                <label htmlFor="sort"></label>
                <select id="sort" onChange={sortedCardData}>
                    <option value='comment'>comment</option>
                    <option value='date'>date</option>
                    <option value="comments">comments</option>
                </select>
            </div>
            <ul ref={imgRef}>
                {photoServer.map((obj) => {
                    
                    return (
                        <li data-comments={obj.comments.length} data-datecard={obj.dateCard} atrlike={obj.name} namephoto={obj.name} className={st.photosImgLi} key={obj.name}>
                            <div style={{position: 'relative'}}>
                                <NavLink to={`/photo/${obj.name}`} className={st.imgWrapSlide}>
                               
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
                                    <div>{obj.comments.length}</div>
                                    <div>{obj.dateCard}</div>
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