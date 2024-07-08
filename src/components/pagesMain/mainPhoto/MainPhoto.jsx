import { Routes, Route} from 'react-router-dom';
import PagePhotos from './pagesPhoto/PagePhotos';
import PagePhotoOne from './pagesPhoto/PagePhotoOne';
import PagePhotoTwo from './pagesPhoto/PagePhotoTwo';
import PagePhotoThree from './pagesPhoto/PagePhotoThree';
import PagePhotoFour from './pagesPhoto/PagePhotoFour';
import PagePhotoFive from './pagesPhoto/PagePhotoFive';


const MainPhoto = () => {
    return ( 
        <main>
               Photos!
              
               <Routes>
                         <Route path="/" element={<PagePhotos />} />
                         <Route path="/pagePhotoOne" element={<PagePhotoOne />} />
                         <Route path="/pagePhotoTwo" element={<PagePhotoTwo />} />
                         <Route path="/pagePhotoThree" element={<PagePhotoThree />} />
                         <Route path="/pagePhotoFour" element={<PagePhotoFour />} />
                         <Route path="/pagePhotoFive" element={<PagePhotoFive />} />
               </Routes>
        </main>
     );
}
 
export default MainPhoto;