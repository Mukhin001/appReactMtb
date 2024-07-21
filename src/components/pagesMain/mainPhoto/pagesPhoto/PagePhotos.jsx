import { NavLink } from "react-router-dom";
import st from './style.module.css';
import { photoServer } from './photoServer';

const PagePhotos = ({getLikesFn}) => {
    
    function getLikes(e) {
        getLikesFn(e.target.parentNode.parentNode);
    };

    return ( 
        <div className={st.pagePhotosWrap}>
            <ul>
                {photoServer.map((obj) => {
                    return (
                        <li atrlike={obj.name} namephoto={obj.name} className={st.photosImgLi} key={obj.name}>
                            <NavLink to={`/photo/${obj.name}`}><img src={obj.url[0]} alt={obj.name} />{obj.name}</NavLink>
                            <div><button onClick={getLikes}>Likes</button></div>
                        </li>
                    )
                })}
            </ul>
        </div>
     );
};
 
export default PagePhotos;