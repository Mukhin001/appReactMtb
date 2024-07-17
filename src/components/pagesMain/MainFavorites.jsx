import { NavLink } from "react-router-dom";
import st from '../pagesMain/mainPhoto/pagesPhoto/style.module.css';

const MainFavorites = ({likes}) => {
    
    
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
                <ul>
                    {   Object.entries(likes).map(([key, value]) => {
                            
                            return (
                                <li key={key} atrlike={key} className={st.photosImgLi}>
                                    <NavLink to={ value.children[0].href.substring(21)}>
                                        <img src={'.' + value.children[0].children[0].src.substring(21)} alt={key} />{key}
                                    </NavLink>
                                    <div><button onClick={deleteLike}>Delete</button></div>
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