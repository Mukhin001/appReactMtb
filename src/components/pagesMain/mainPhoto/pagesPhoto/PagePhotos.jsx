import { NavLink } from "react-router-dom";
import st from './style.module.css';

const PagePhotos = () => {
    return ( 
        <div className={st.pagePhotosWrap}>
            <ul>
                <li  className={st.photosImgLi}><NavLink to="/photo/pagePhotoOne"><img src="./img/bodyFon.jpeg" alt="bodyFon"/>bodyFon</NavLink></li>
                <li className={st.photosImgLi}><NavLink to="/photo/pagePhotoTwo"><img src="./img/dark-theme.jpg" alt="dark-theme" />dark-theme</NavLink></li>
                <li className={st.photosImgLi}><NavLink to="/photo/pagePhotoThree"><img src="./img/IMG_6437.jpeg" alt="IMG_6437" />IMG_6437</NavLink></li>
                <li className={st.photosImgLi}><NavLink to="/photo/pagePhotoFour"><img src="./img/IMG_6784.jpeg" alt="IMG_6784" />IMG_6784</NavLink></li>
                <li className={st.photosImgLi}><NavLink to="/photo/pagePhotoFive"><img src="./img/scale_1200.jpg" alt="scale_1200" />scale_1200</NavLink></li>
            </ul>
        </div>
     );
};
 
export default PagePhotos;