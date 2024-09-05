import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import './app.css';
import { useEffect, useState } from 'react';

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
import SocialNetwork from './components/commonPages/socialNetwork/SocialNetwork';
import BtnUp from './components/commonPages/btnUp/BtnUp';

export const VideoContext = React.createContext();
export const ContextClientWidth = React.createContext();

const arrLink = [
    '/',
     '/photo',
     '/video',
     '/news',
     '/about',
];

function App() { 
    
    const [countLink, setCountLink] = useState(0);
    const [userNameLogin, setUserNameLogin] = useState('anonimus');
    const [loginExit, setLoginExit] = useState('Login');
    const [linkExit, setLinkExit] = useState('/login');
    const [likes, setLikes] = useState({});

    const [searchPhoto, setSearchPhoto] = useState([]);
    const [searchVideo, setSearchVideo] = useState([]);
    const [theme, setTheme] = useState('light');
    const [widthDisplay, setWidthDisplay] = useState(window.innerWidth);
    const loc = useLocation();

    const [searchUserText, setSearchUserTextFn] = useState('');

    const themeColorLight = {
        '--color-text': 'darkblue',
        '--color-border': 'crimson',
        '--color-backGround': 'burlywood',
        '--color-navBar': 'orange',
    };

    const themeColorDark = {
        '--color-text': 'burlywood',
        '--color-border': 'blueviolet',
        '--color-backGround': '#543b54',
        '--color-navBar': '#6b016b',
    };

    useEffect(() => {
        if(theme === 'light') {
            Object.entries(themeColorLight).forEach(([key, value]) => document.documentElement.style.setProperty(key, value));
        } else {
            Object.entries(themeColorDark).forEach(([key, value]) => document.documentElement.style.setProperty(key, value));
        }
    });

    function setWidthDisplayFn(event) { 
        setWidthDisplay(event.target.window.innerWidth);
    };
    
    window.addEventListener('resize', setWidthDisplayFn);

    function getPhotoFn(obj) {
       setSearchPhoto(prev => [...prev, obj]);   
    };

    function getVideoFn(obj) {
        setSearchVideo(prev => [...prev, obj]);  
    };
    
    function getLikesFn(li) {
        setLikes(prev => ({...prev, [li.getAttribute('atrlike')] : li}))
    };

    function rightLinkClick(elem) {
        setCountLink(prev => prev + 1);

            if(countLink >= arrLink.length - 1) {
                setCountLink(0);   
            }
    };

    function leftLinkClick(elem) {
        
        setCountLink(prev => prev - 1);
            
            if(countLink <= 0) {
                setCountLink(arrLink.length - 1)
            } 
    };


    function userNameLoginEnterFn(value) {
        setUserNameLogin(value);
    };

    function getLoginFn(value) {
        setLoginExit(value);
    };

    function linkExitFn(value) {
        setLinkExit(value); 
    };

    function setThemeSite(value) {
        setTheme(value);
    };

    function searchUserTextFn(value) {
        setSearchUserTextFn(value);
    };

  return (
    <div className={`app ${theme}`}> 
       {/* <Router> */}
            {/* <VideoContext.Provider value={'namePhoto'}> */}
                <ContextClientWidth.Provider  value={widthDisplay}>
                    <Header userNameLogin={userNameLogin} loginExit={loginExit} linkExit={linkExit} 
                            setSearchPhoto={setSearchPhoto} getPhotoFn={getPhotoFn}  
                            setSearchVideo={setSearchVideo} getVideoFn={getVideoFn}
                            setThemeSite={setThemeSite} searchUserTextFn={searchUserTextFn}
                    />
                    <div>
                        <p>index {countLink}</p>
                        <p>locationRoute {loc.pathname}</p>
                        
                    </div>
                </ContextClientWidth.Provider>

                <div className='navBarWrapper'>
                    <NavBarMain />
                
                    <div className='slideLinkMain'>
                        <NavLink onClick={leftLinkClick} to={arrLink[countLink]}>left</NavLink>
                            <Routes>
                                <Route path="/" element={<MainHome />} />
                                <Route path="/photo/*" element={<MainPhoto getLikesFn={getLikesFn} userNameLogin={userNameLogin}/>} />
                                <Route path="/video/*" element={<MainVideo />} />
                                <Route path="/news" element={<MainNews />} />
                                <Route path="/about" element={<MainAbout />} />
                                <Route path="/login" element={<MainLogin enterAcc={userNameLoginEnterFn} getLoginFn={getLoginFn} linkExitFn={linkExitFn}/>}/>
                                <Route path="/createAccaunt" element={<MainNoLogin registerAcc={userNameLoginEnterFn} getLoginFn={getLoginFn} linkExitFn={linkExitFn}/>}/>
                                <Route path="/exit" element={<MainExit  enterAcc={userNameLoginEnterFn} getLoginFn={getLoginFn} linkExitFn={linkExitFn} />} />
                                <Route path="/bye" element={<MainBye />} />
                                <Route path="/search" element={<MainSearch searchUserText={searchUserText} searchPhoto={searchPhoto} searchVideo={searchVideo} getLikesFn={getLikesFn}/>} />
                                <Route path='/favorites' element={<MainFavorites likes={likes}/>} />
                            </Routes>
                        <NavLink onClick={rightLinkClick} to={arrLink[countLink]}>right</NavLink>
                    </div>
                </div>
            {/* </VideoContext.Provider> */}
            <Footer />
       {/* </Router> */}
        <SocialNetwork userNameLogin={userNameLogin}/>
       <BtnUp />
    </div>
  );
};

export default App;

