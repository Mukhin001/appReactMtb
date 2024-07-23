import { NavLink } from "react-router-dom";
import st from './style.module.css';
import { photoServer } from './photoServer';

const PagePhotos = ({getLikesFn}) => {
    
    function getLikes(e) {
        getLikesFn(e.target.parentNode.parentNode);
    };

    function mouseOver() {
        console.log('da');
    }

    return ( 
        <div className={st.pagePhotosWrap}>
            <ul>
                {photoServer.map((obj) => {
                    return (
                        <li atrlike={obj.name} namephoto={obj.name} className={st.photosImgLi} key={obj.name}>
                            <div>
                                <NavLink to={`/photo/${obj.name}`}><img onMouseOver={mouseOver} src={obj.url[0]} alt={obj.name} className={st.imgPhotos}/></NavLink>
                                <h3 className={st.imgName}>{obj.name}</h3>
                                <div className={st.gridHoverImg}>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div><button onClick={getLikes}>Likes</button></div>
                        </li>
                    )
                })}
            </ul>
        </div>
     );
};
 
export default PagePhotos;