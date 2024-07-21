import { NavLink } from "react-router-dom";
import st from '../pagesMain/mainPhoto/pagesPhoto/style.module.css';

const MainSearch = ({searchPhoto, searchVideo, getLikesFn}) => {

    function getLikes(e) {
        getLikesFn(e.target.parentNode.parentNode);
    };
    
    return ( 
        <main>
            MainSearch
            <div className={st.pagePhotosWrap}>
                <ul>
                    { searchPhoto.map((obj) => {
                        return (
                            <li atrlike={obj.name} className={st.photosImgLi} key={obj.name}>
                                <NavLink to={`/photo/${obj.name}`}><img src={obj.url[0]} alt={obj.name} />{obj.name}</NavLink>
                                <div><button onClick={getLikes}>Likes</button></div>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
            <div className={st.pagePhotosWrap}>
                <ul>
                    { searchVideo.map((obj) => {
                        return (
                            <li atrlike={obj.name} className={st.photosImgLi} key={obj.name}>
                                <NavLink to={`/video/${obj.name}`}><video src="#" />{obj.name}</NavLink>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </main>
     );
}
 
export default MainSearch;