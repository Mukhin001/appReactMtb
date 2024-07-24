import { NavLink } from "react-router-dom";
import st from './style.module.css';
import { photoServer } from './photoServer';
import { useRef } from "react";


const PagePhotos = ({getLikesFn}) => {
    const imgRef = useRef();

    function getLikes(e) {
        getLikesFn(e.target.parentNode.parentNode);
    };

    function mouseOver() {
         //imgRef.current.style.display = 'flex';
        console.log(imgRef.current);
    };

   

    return ( 
        <div className={st.pagePhotosWrap}>
            <ul>
                {photoServer.map((obj) => {
                    
                    return (
                        <li atrlike={obj.name} namephoto={obj.name} className={st.photosImgLi} key={obj.name}>
                            <div style={{position: 'relative'}}  onMouseOver={mouseOver}  >
                                <NavLink to={`/photo/${obj.name}`}>
                                {/* <img src={obj.url[0]} alt={obj.name} className={st.imgPhotos}/> */}
                                {obj.url.map(url => {
                                    
                                    // url[0].className={st.imgActiveSlide}
                                    return ( <img ref={imgRef} style={{display: 'none'}}  src={url} key={url} alt={url.substring(26)}/>)})}
                                <div  className={st.gridHoverImg} style={{gridTemplateColumns: `repeat(${obj.url.length}, 1fr)`}}>
                                    {obj.url.map((url, i) => {
                                        return (<div className={st.slideTods} key={url.substring(2)}>{i}</div>)
                                    })}
                                </div>
                                
                                </NavLink>
                                <h3 className={st.imgName}>{obj.name}</h3>
                                
                            </div>
                            <div style={{display: 'flex', justifyContent: 'flex-end'}}><button onClick={getLikes}>Likes</button></div>
                        </li>
                    )
                })}
            </ul>
        </div>
     );
};
 
export default PagePhotos;