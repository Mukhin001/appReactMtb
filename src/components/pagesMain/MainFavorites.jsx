import { NavLink } from "react-router-dom";
//import { useState } from "react";
import st from '../pagesMain/mainPhoto/pagesPhoto/style.module.css';

const MainFavorites = ({likes}) => {
    //const [headingLike, setHeadingLike] = useState('No favorite');
    console.log(likes);
    function deleteLike(e) {

        e.target.parentNode.parentNode.remove();

        likes.forEach((elem, i) => {
            if(elem.getAttribute('atrlike') ===  e.target.parentNode.parentNode.getAttribute('atrlike')) {
                likes.splice(i, 1);
            }
        })
    };

    // if(likes.length > 0) {
    //     setHeadingLike('likes!')
    // };

    return (
        <div className={st.pagePhotosWrap}>
            Likes
            <ul>
                {/* {(likes.length > 0) && 
                    likes.map((elem, i) => {
                      
                        return (
                            <li key={i} atrlike={elem.getAttribute('atrlike')}>
                                <NavLink to={ elem.children[0].href.substring(21)} className={st.photosImgLi}>
                                    <img src={'.' + elem.children[0].children[0].src.substring(21)} alt="a"/>nav
                                </NavLink>
                                <div><button onClick={deleteLike}>Delete</button></div>
                            </li>
                        )
                    })
                } */}
                {   (likes.length > 0) && 
                    Object.entries(likes).map(([key, value], i) => {
                        return (
                            <li key={i} atrlike={value.getAttribute('atrlike')}>
                                <NavLink to={ value.children[0].href.substring(21)} className={st.photosImgLi}>
                                    <img src={'.' + value.children[0].children[0].src.substring(21)} alt="a"/>nav
                                </NavLink>
                                <div><button onClick={deleteLike}>Delete</button></div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
    

    
}
//                      <li>
//                         <NavLink to={ likes.children[0].href.substring(21)} className={st.photosImgLi}>
//                             <img src={'.' + likes.children[0].children[0].src.substring(21)} alt="a"/>nav
//                         </NavLink>
//                     </li>
export default MainFavorites;