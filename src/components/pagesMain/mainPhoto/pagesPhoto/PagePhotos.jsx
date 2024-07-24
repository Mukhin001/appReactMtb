import { NavLink } from "react-router-dom";
import st from './style.module.css';
import { photoServer } from './photoServer';
import { useRef, useEffect, useState } from "react";


const PagePhotos = ({getLikesFn}) => {
    const imgRef = useRef(null);
    const slideDots = useRef(null);
    const [arrImg, setArrImg] = useState([]);
 
    function getLikes(e) {
        getLikesFn(e.target.parentNode.parentNode);
    };

    function mouseOver() {
        // [...imgRef.current.children].forEach(li => {
        // //     [...li.children[0].children[0].children].slice(0, -1).forEach(img => img.style.display = 'none');
        // //    // console.log([...li.children[0].children[0].children]);
        // //     [...li.children[0].children[0].children][0].style.display = 'block';
        // });
        // console.log(1);
       
        [...imgRef.current.children].forEach(li => {
            let dots = ([...li.children[0].children[0].children].slice(-1));
            //[...li.children[0].children[0].children].slice(0, -1).forEach(img => img.style.display = 'none');

            for(let i = 0; i < dots.length; i++) {
                
        // //    // console.log([...li.children[0].children[0].children]);
          //  [...li.children[0].children[0].children][i].style.display = 'block';
                for(let j = 0; j < [...li.children[0].children[0].children].length; j++) {
                     [...li.children[0].children[0].children][i].style.display = 'none';
                }
                //console.log( [...li.children[0].children[0].children]);
            }
        });
    };

   useEffect(() => {
        [...imgRef.current.children].forEach(li => {
         
            [...li.children[0].children[0].children][0].style.display = 'block';
            ([...li.children[0].children[0].children].slice(-1));
        });
       // setArrImg(imgRef.current.children);
       
   });

    return ( 
        <div className={st.pagePhotosWrap}>
            <ul ref={imgRef}>
                {photoServer.map((obj) => {
                    
                    return (
                        <li atrlike={obj.name} namephoto={obj.name} className={st.photosImgLi} key={obj.name}>
                            <div style={{position: 'relative'}}  onMouseOver={mouseOver} >
                                <NavLink to={`/photo/${obj.name}`}>
                               
                                {obj.url.map(url => {
                                    return ( <img src={url} key={url} alt={url.substring(26)}  />)})}
                                <div ref={slideDots} className={st.gridHoverImg} style={{gridTemplateColumns: `repeat(${obj.url.length}, 1fr)`}}>
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