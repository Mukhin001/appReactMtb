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
    const [theme, setTheme] = useState();
    const [widthDisplay, setWidthDisplay] = useState(window.innerWidth);
    const loc = useLocation();

    const [searchUserText, setSearchUserTextFn] = useState('');

    const themeColorLight = {
        '--color-text': '#123C69',
        '--color-border': '#BAB2B5',
        '--color-backGround': '#EDC7B7',
        '--color-navBar': '#AC3B61',
        '--color-backImg': '#EEE2DC',
    };

    const themeColorDark = {
        '--color-text': '#895061',
        '--color-border': '#0677A1',
        '--color-backGround': '#59253A',
        '--color-navBar': '#78244C',
        '--color-backImg': '#2D4159',
    };

    useEffect(() => {
        if(localStorage.getItem('theme')) {
            setTheme(localStorage.getItem('theme'));
        } else {
            setTheme('light');
        }
        
    }, [theme]);

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
       setSearchPhoto(prev => [...new Set(prev), obj]);   
    };

    function getVideoFn(obj) {
        setSearchVideo(prev => [...new Set(prev), obj]);  
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
                            theme={theme}
                    />
                    <div>
                        <p>index {countLink}</p>
                        <nav>locationRoute:
                            {loc.pathname.split('/').map(elem => (elem !== '') && <span key={elem} to={`/${elem}`}>{ elem} </span>)}
                        </nav>
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
        <SocialNetwork userNameLogin={userNameLogin} theme={theme}/>
       <BtnUp />
    </div>
  );
};

export default App;

