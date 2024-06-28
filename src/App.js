import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import './app.css';
import { useState } from 'react';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import MainPhoto from './components/pagesMain/mainPhoto/MainPhoto';
import MainVideo from './components/pagesMain/MainVideo';
import MainNews from './components/pagesMain/mainNews/MainNews';
import MainAbout from './components/pagesMain/MainAbout';
import MainHome from './components/pagesMain/MainHome';
import MainLogin from './components/pagesMain/MainLogin';
import MainNoLogin from './components/pagesMain/MainNoLogin';

const arrLink = [
    '/',
     '/photo',
     '/video',
     '/news',
     '/about',
];

function App() {
    
    const [countLink, setCountLink] = useState(0);
    const [userName, setUserName] = useState('the user did not log in');

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

  return (
    <div className="App">
       <Router>
            <Header userGreeting={userName}/>
            <div className='navbarMain'>
                
                <NavBar />
                
               <div className='slideLinkMain'>
                    <NavLink onClick={leftLinkClick} to={arrLink[countLink]}>left</NavLink>
                        <Routes>
                            <Route path='/' element={<MainHome />}/>
                            <Route path="/photo" element={<MainPhoto />}/>
                            <Route path="/video" element={<MainVideo />}/>
                            <Route path="/news" element={<MainNews />}/>
                            <Route path="/about" element={<MainAbout />}/>
                            <Route path="/login" element={<MainLogin  enterAcc={userNameEnterFn}/>}/>
                            <Route path="/createAccaunt" element={<MainNoLogin registerAcc={userNameRegisterFn}/>}/>
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
