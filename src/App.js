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
            <Header userGreeting={userName} loginExit={loginExit} linkExit={linkExit}/>
            <div className='navBarWrapper'>
                
                <NavBarMain />
                
               <div className='slideLinkMain'>
                    <NavLink onClick={leftLinkClick} to={arrLink[countLink]}>left</NavLink>
                        <Routes>
                            <Route path="/" element={<MainHome />} />
                            <Route path="/photo/*" element={<MainPhoto />}/>
                            <Route path="/video/*" element={<MainVideo />}/>
                            <Route path="/news" element={<MainNews />}/>
                            <Route path="/about" element={<MainAbout />}/>
                            <Route path="/login" element={<MainLogin enterAcc={userNameEnterFn} loginExit={getLoginFn} linkExit={linkExitFn}/>}/>
                            <Route path="/createAccaunt" element={<MainNoLogin registerAcc={userNameRegisterFn} />}/>
                            <Route path="/exit" element={<MainExit  enterAcc={userNameEnterFn} loginExit={getLoginFn} linkExit={linkExitFn} />} />
                            <Route path="/bye" element={<MainBye />} />
                            <Route path="search" element={<MainSearch />}/>
                        </Routes>
                    <NavLink onClick={rightLinkClick} to={arrLink[countLink]}>right</NavLink>
               </div>
            </div>

            <Footer />
       </Router>
    </div>
  );
};

export default App;
