import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import './app.css';
import { useState } from 'react';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBarMain from "./components/navBarMain/NavBarMain";
import MainPhoto from './components/pagesMain/mainPhoto/MainPhoto';
import MainVideo from './components/pagesMain/mainVideo/MainVideo';
import MainNews from './components/pagesMain/mainNews/MainNews';
import MainAbout from './components/pagesMain/MainAbout';
import MainHome from './components/pagesMain/mainHome/MainHome';
import MainLogin from './components/pagesMain/MainLogin';
import MainNoLogin from './components/pagesMain/MainNoLogin';
import MainExit from './components/pagesMain/MainExit';
import MainBye from './components/pagesMain/MainBye';
import MainSearch from './components/pagesMain/MainSearch';
import MainFavorites from './components/pagesMain/MainFavorites';

import React from "react";

// export const VideoContext = React.createContext();
export const ContextClientWidth = React.createContext();

const arrLink = [
    '/',
     '/photo',
     '/video',
     '/news',
     '/about',
];

function App() {
    
    const [countLink, setCountLink] = useState(1);
    const [userName, setUserName] = useState('the user did not log in');
    const [loginExit, setLoginExit] = useState('Login');
    const [linkExit, setLinkExit] = useState('/login');
    const [likes, setLikes] = useState({});

    const [searchPhoto, setSearchPhoto] = useState([]);
    const [searchVideo, setSearchVideo] = useState([]);

    
    const [widthDisplay, setWidthDisplay] = useState(window.innerWidth);

    function setWidthDisplayFn(event) { 
        setWidthDisplay(event.target.window.innerWidth);
    };
    
    window.addEventListener('resize', setWidthDisplayFn);
    // setTimeout(() => {
    //     window.removeEventListener('resize', setWidthDisplayFn);
    // }, 5000);

    function getPhotoFn(obj) {
       setSearchPhoto(prev => [...prev, obj]);   
    };

    function getVideoFn(obj) {
        setSearchVideo(prev => [...prev, obj]);  
    };
    
    function getLikesFn(li) {
        setLikes(prev => ({...prev, [li.getAttribute('atrlike')] : li}))
    };

    function rightLinkClick () {
        
        setCountLink(countLink + 1);

            if(countLink >= arrLink.length - 1) {
                setCountLink(0);   
            }
    };

    function leftLinkClick () {
        
        setCountLink(countLink - 1);
            
            if(countLink <= 0) {
                setCountLink(arrLink.length - 1)
            } 
    };


    function userNameEnterFn(value) {
        setUserName('Hello ' + value + '!');
       //console.log(localStorage);
    };

    function userNameRegisterFn(value) {
        setUserName('Hello ' + value + '!');
       //console.log(localStorage);
    };

    function getLoginFn(value) {
        setLoginExit(value);
    };

    function linkExitFn(value) {
        setLinkExit(value);
    };
    const [btnToDisplay, setBtnToDisplay] = useState('none');
    
    window.addEventListener('scroll', function() {
       
        if( this.window.scrollY > (document.documentElement.clientHeight / 3)) {
            setBtnToDisplay('block');
        } else {
            setBtnToDisplay('none');
        }
    });

    function btnAppTo() {
        window.scrollTo({top: 0, left: 0, behavior: "smooth",});
    };

  return (
    <div className="App">
       <Router>
            {/* <VideoContext.Provider value={'namePhoto'}> */}
                <ContextClientWidth.Provider  value={widthDisplay}>
                    <Header userGreeting={userName} loginExit={loginExit} linkExit={linkExit} getPhotoFn={getPhotoFn} 
                            setSearchPhoto={setSearchPhoto} getVideoFn={getVideoFn}
                    />
                </ContextClientWidth.Provider>

                <div className='navBarWrapper'>
                
                    <NavBarMain />
                
                    <div className='slideLinkMain'>
                        <NavLink onClick={leftLinkClick} to={arrLink[countLink]}>left</NavLink>
                            <Routes>
                                <Route path="/" element={<MainHome />} />
                                <Route path="/photo/*" element={<MainPhoto getLikesFn={getLikesFn}/>} />
                                <Route path="/video/*" element={<MainVideo />} />
                                <Route path="/news" element={<MainNews />} />
                                <Route path="/about" element={<MainAbout />} />
                                <Route path="/login" element={<MainLogin enterAcc={userNameEnterFn} loginExit={getLoginFn} linkExit={linkExitFn}/>}/>
                                <Route path="/createAccaunt" element={<MainNoLogin registerAcc={userNameRegisterFn} />}/>
                                <Route path="/exit" element={<MainExit  enterAcc={userNameEnterFn} loginExit={getLoginFn} linkExit={linkExitFn} />} />
                                <Route path="/bye" element={<MainBye />} />
                                <Route path="/search" element={<MainSearch searchPhoto={searchPhoto} searchVideo={searchVideo} getLikesFn={getLikesFn}/>} />
                                <Route path='/favorites' element={<MainFavorites likes={likes}/>} />
                            </Routes>
                        <NavLink onClick={rightLinkClick} to={arrLink[countLink]}>right</NavLink>
                    </div>
                </div>
            {/* </VideoContext.Provider> */}
            <Footer />
       </Router>
       <button onClick={btnAppTo} className='btnApp' style={{display: `${btnToDisplay}`}}>up</button>
    </div>
  );
};

export default App;

