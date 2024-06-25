import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import MainPhoto from './components/pagesMain/mainPhoto/MainPhoto';
import MainVideo from './components/pagesMain/MainVideo';
import MainNews from './components/pagesMain/mainNews/MainNews';
import MainAbout from './components/pagesMain/MainAbout';
import MainHome from './components/pagesMain/MainHome';



function App() {
  return (
    <div className="App">
       <Router>
            <Header />
            <NavBar />
            
                <Routes>
                    <Route path='/' element={<MainHome />}/>
                    <Route path="/photo" element={<MainPhoto />}/>
                    <Route path="/video" element={<MainVideo />}/>
                    <Route path="/news" element={<MainNews />}/>
                    <Route path="/about" element={<MainAbout />}/>
                </Routes>

            <Footer />
       </Router>
    </div>
  );
}

export default App;
