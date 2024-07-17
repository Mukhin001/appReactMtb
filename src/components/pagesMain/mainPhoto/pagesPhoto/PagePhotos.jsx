import { NavLink } from "react-router-dom";
import st from './style.module.css';

const PagePhotos = ({getLikesFn}) => {

    function getLikes(e) {
        getLikesFn(e.target.parentNode.parentNode);

    };

    return ( 
        <div className={st.pagePhotosWrap}>
            <ul>
                <li atrlike='bodyFon' className={st.photosImgLi}><NavLink to="/photo/pagePhotoOne"><img src="./img/cap2013/WP_20160325_004.jpg" alt="bodyFon"/>bodyFon</NavLink>
                    <div><button onClick={getLikes}>Likes</button></div>
                </li>
                <li atrlike='dark-theme' className={st.photosImgLi}><NavLink to="/photo/pagePhotoTwo"><img src="./img/cap2015/WP_20160831_18_56_31_Pro.jpg" alt="dark-theme" />dark-theme</NavLink>
                    <div><button onClick={getLikes}>Likes</button></div>
                </li>
                <li atrlike='IMG_6437' className={st.photosImgLi}><NavLink to="/photo/pagePhotoThree"><img src="./img/garland.png" alt="IMG_6437" />IMG_6437</NavLink>
                    <div><button onClick={getLikes}>Likes</button></div>
                </li>
                <li atrlike='IMG_6784' className={st.photosImgLi}><NavLink to="/photo/pagePhotoFour"><img src="./img/IMG_6784.jpeg" alt="IMG_6784" />IMG_6784</NavLink>
                    <div><button onClick={getLikes}>Likes</button></div>
                </li>
                <li atrlike='scale_1200' className={st.photosImgLi}><NavLink to="/photo/pagePhotoFive"><img src="./img/scale_1200.jpg" alt="scale_1200" />scale_1200</NavLink>
                    <div><button onClick={getLikes}>Likes</button></div>
                </li>
            </ul>
        </div>
     );
};
 
export default PagePhotos;