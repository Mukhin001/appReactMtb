// import { Routes, Route, NavLink,  } from 'react-router-dom';
// import {  useState } from 'react';


// import MainPhoto from './pagesMain/mainPhoto/MainPhoto';
// import MainVideo from './pagesMain/mainVideo/MainVideo';
// import MainNews from './pagesMain/mainNews/MainNews';
// import MainAbout from './pagesMain/MainAbout';
// import MainHome from './pagesMain/mainHome/MainHome';
// import MainLogin from './pagesMain/MainLogin';
// import MainNoLogin from './pagesMain/MainNoLogin';
// import MainExit from './pagesMain/MainExit';
// import MainBye from './pagesMain/MainBye';
// import MainSearch from './pagesMain/MainSearch';
// import MainFavorites from './pagesMain/MainFavorites';

// const SlideLinkMain = () => {
//     const arrLink = [
//         '/',
//          '/photo',
//          '/video',
//          '/news',
//          '/about',
//     ];

//     const [countLink, setCountLink] = useState(0);
//     const [likes, setLikes] = useState({});

//     const [searchPhoto, setSearchPhoto] = useState([]);
//     const [searchVideo, setSearchVideo] = useState([]);

//     function getLikesFn(li) {
//         setLikes(prev => ({...prev, [li.getAttribute('atrlike')] : li}))
//     };

//     function rightLinkClick(elem) {
//         setCountLink(prev => prev + 1);

//             if(countLink >= arrLink.length - 1) {
//                 setCountLink(0);   
//             }
//     };

//     function leftLinkClick(elem) {
        
//         setCountLink(prev => prev - 1);
            
//             if(countLink <= 0) {
//                 setCountLink(arrLink.length - 1)
//             } 
//     };


//     function userNameLoginEnterFn(value) {
//         setUserNameLogin(value);
//     };

//     function getLoginFn(value) {
//         setLoginExit(value);
//     };

//     function linkExitFn(value) {
//         setLinkExit(value); 
//     };

//     return ( 
//         <div className='slideLinkMain'>
//             <NavLink onClick={leftLinkClick} to={arrLink[countLink]}>left</NavLink>
//                 <Routes>
//                     <Route path="/" element={<MainHome />} />
//                     <Route path="/photo/*" element={<MainPhoto getLikesFn={getLikesFn} userNameLogin={userNameLogin}/>} />
//                     <Route path="/video/*" element={<MainVideo />} />
//                     <Route path="/news" element={<MainNews />} />
//                     <Route path="/about" element={<MainAbout />} />
//                     <Route path="/login" element={<MainLogin enterAcc={userNameLoginEnterFn} getLoginFn={getLoginFn} linkExitFn={linkExitFn}/>}/>
//                     <Route path="/createAccaunt" element={<MainNoLogin registerAcc={userNameLoginEnterFn} getLoginFn={getLoginFn} linkExitFn={linkExitFn}/>}/>
//                     <Route path="/exit" element={<MainExit  enterAcc={userNameLoginEnterFn} getLoginFn={getLoginFn} linkExitFn={linkExitFn} />} />
//                     <Route path="/bye" element={<MainBye />} />
//                     <Route path="/search" element={<MainSearch searchPhoto={searchPhoto} searchVideo={searchVideo} getLikesFn={getLikesFn}/>} />
//                     <Route path='/favorites' element={<MainFavorites likes={likes}/>} />
//                 </Routes>
//             <NavLink onClick={rightLinkClick} to={arrLink[countLink]}>right</NavLink>
//         </div>
//      );
// };
 
// export default SlideLinkMain;