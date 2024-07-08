import { NavLink } from "react-router-dom";
import st from './style.module.css';

const PagePhotos = () => {
    return ( 
        <div className={st.pagePhotosWrap}>
            <ul>
                <li><NavLink to="/photo/pagesPhotoOne">One</NavLink></li>
                <li><NavLink to="/photo/pagePhotoTwo">Two</NavLink></li>
                <li><NavLink to="/photo/pagePhotoThree">Three</NavLink></li>
                <li><NavLink to="/photo/pagePhotoFour">Four</NavLink></li>
                <li><NavLink to="/photo/pagePhotoFive">Five</NavLink></li>
            </ul>
        </div>
     );
};
 
export default PagePhotos;