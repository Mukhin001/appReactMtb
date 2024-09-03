import { Routes, Route} from 'react-router-dom';
import PagePhotos from './pagesPhoto/PagePhotos';
import PagePhotoOne from './pagesPhoto/PagePhotoOne';
import PagePhotoTwo from './pagesPhoto/PagePhotoTwo';
import PagePhotoThree from './pagesPhoto/PagePhotoThree';
import PagePhotoFour from './pagesPhoto/PagePhotoFour';
import PagePhotoFive from './pagesPhoto/PagePhotoFive';
import { useRef } from 'react'; 

const MainPhoto = ({getLikesFn, userNameLogin}) => {

     const main = useRef();
    
    return ( 
        <main ref={main}>
               Photos!
              
               <Routes>
                    <Route path="/" element={<PagePhotos getLikesFn={getLikesFn} />} />
                    <Route path="/cap2013" element={<PagePhotoOne 
                        name={'cap2013'}
                        userNameLogin={userNameLogin}
                    />} />
                    <Route path="/cap2015" element={<PagePhotoTwo 
                        name={'cap2015'}
                        userNameLogin={userNameLogin}
                    />}/>
                    <Route path="/IMG-6437" element={<PagePhotoThree 
                         name={'IMG-6437'}
                         userNameLogin={userNameLogin}
                    />} />
                    <Route path="/IMG_6784" element={<PagePhotoFour 
                        name={'IMG_6784'}
                        userNameLogin={userNameLogin}
                    />} />
                    <Route path="/scale_1200" element={<PagePhotoFive 
                        name={'scale_1200'}
                        userNameLogin={userNameLogin}
                    />} />
               </Routes>
        </main>
     );
}
 
export default MainPhoto;