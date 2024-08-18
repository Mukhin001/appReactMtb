import HtmlVideo from "../HtmlVideo";
import { Routes, Route } from "react-router-dom";
import NewZealand from "./NewZealand/NewZealand";
import Prague from "./Prague/Prague";

const PageSlopeStyleVideo = ({disciplineRoute}) => {
    return ( 
        <div>
            PageSlopeStyleVideo
            
            <Routes>
                <Route path="/" element={ <HtmlVideo disciplineRoute={disciplineRoute} />}/>
                <Route path="/NewZealand" element={ <NewZealand /> }/>
                <Route path="/Prague" element={ <Prague /> }/>
            </Routes>
        </div>
     );
};
 
export default PageSlopeStyleVideo;