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
                <Route path="/street/*" element={<PageStreetVideo disciplineRoute={'street'}/>}/>
                <Route path="/dirt/*" element={<PageDirtVideo disciplineRoute={'dirt'}/>}/>
                <Route path="/park/*" element={<PageParkVideo disciplineRoute={'park'}/>}/>
                <Route path="/slopestyle/*" element={<PageSlopeStyleVideo disciplineRoute={'slopestyle'}/>}/>
            </Routes>
        </main>
     );
};
 
export default MainVideo; 