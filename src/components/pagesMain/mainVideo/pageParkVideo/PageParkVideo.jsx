import HtmlVideo from "../HtmlVideo";
import { Routes, Route } from "react-router-dom";
import Otradnoe from "./otradnoe/Otradnoe";
import Baltic from "./baltic/Baltic";

const PageParkVideo = ({disciplineRoute}) => {
    return ( 
        <div>
            PageParkVideo
            
            <Routes>
                <Route path="/" element={ <HtmlVideo disciplineRoute={disciplineRoute} />}/>
                <Route path="/baltic" element={ <Baltic /> }/>
                <Route path="/otradnoe" element={ <Otradnoe /> }/>
            </Routes>
        </div>
     );
}
 
export default PageParkVideo;