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
    
    const [countLink, setCountLink] = useState(0);
    const [userNameLogin, setUserNameLogin] = useState('anonimus');
    const [loginExit, setLoginExit] = useState('Login');
    const [linkExit, setLinkExit] = useState('/login');
    const [likes, setLikes] = useState({});

    const [searchPhoto, setSearchPhoto] = useState([]);
    const [searchVideo, setSearchVideo] = useState([]);
    const [theme, setTheme] = useState('light');
    const [widthDisplay, setWidthDisplay] = useState(window.innerWidth);
    const locationRoute = useLocation();

    //console.log(locationRoute);

        // arrLink.forEach((e, i) => {
        //     if(e === locationRoute.pathname) {
        //         console.log(e, i);
        //             //setCountLink(i + 1)
        //     }
        // });

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

    function rightLinkClick() {
        
        setCountLink(prev => prev + 1);

            if(countLink >= arrLink.length - 1) {
                setCountLink(0);   
            }
            console.log(countLink);
    };

    function leftLinkClick() {
        
        setCountLink(prev => prev - 1);
            
            if(countLink <= 0) {
                setCountLink(arrLink.length - 1)
            }
            console.log(countLink); 
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

    function setThemeSite(value) {
        setTheme(value);
    };

  return (
    <div className={`app ${theme}`}> 
       {/* <Router> */}
            {/* <VideoContext.Provider value={'namePhoto'}> */}
                <ContextClientWidth.Provider  value={widthDisplay}>
                    <Header userNameLogin={userNameLogin} loginExit={loginExit} linkExit={linkExit} getPhotoFn={getPhotoFn} 
                            setSearchPhoto={setSearchPhoto} getVideoFn={getVideoFn}
                            setThemeSite={setThemeSite}
                    />
                </ContextClientWidth.Provider>

                <div className='navBarWrapper'>
                    <p>{countLink}</p>
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
                                <Route path="/search" element={<MainSearch searchPhoto={searchPhoto} searchVideo={searchVideo} getLikesFn={getLikesFn}/>} />
                                <Route path='/favorites' element={<MainFavorites likes={likes}/>} />
                            </Routes>
                        <NavLink onClick={rightLinkClick} to={arrLink[countLink]}>right</NavLink>
                    </div>
                </div>
            {/* </VideoContext.Provider> */}
            <Footer />
       {/* </Router> */}
       <button onClick={btnAppTo} className='btnApp' style={{display: `${btnToDisplay}`}}>up</button>
    </div>
  );
};

export default App;

