import { Routes, Route } from "react-router-dom";
import PageStreetVideo from "./pageStreetVideo/PageStreetVideo";
import PageDirtVideo from "./pageDirtVideo/PageDirtVideo";
import PageParkVideo from "./pageParkVideo/PageParkVideo";
import PageSlopeStyleVideo from "./pageSlopeStyleVideo/PageSlopeStyleVideo";
import PagesVideo from "./pagesVideo/PagesVideo";

const MainVideo = () => {

    return ( 
        <main>
            Video
            <Routes>
                <Route path="/" element={<PagesVideo />}/>
                <Route path="/street" element={<PageStreetVideo discipline={'street'}/>}/>
                <Route path="/dirt" element={<PageDirtVideo discipline={'dirt'}/>}/>
                <Route path="/park" element={<PageParkVideo discipline={'park'}/>}/>
                <Route path="/slopestyle" element={<PageSlopeStyleVideo discipline={'slopestyle'}/>}/>
            </Routes>
        </main>
     );
};
 
export default MainVideo; 