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

export const VideoContext = React.createContext();

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

  return (
    <div className="App">
       <Router>
            <VideoContext.Provider value={'namePhoto'}>
                <Header userGreeting={userName} loginExit={loginExit} linkExit={linkExit} getPhotoFn={getPhotoFn} setSearchPhoto={setSearchPhoto} getVideoFn={getVideoFn}/>
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
            </VideoContext.Provider>
            <Footer />
       </Router>
    </div>
  );
};

export default App;

