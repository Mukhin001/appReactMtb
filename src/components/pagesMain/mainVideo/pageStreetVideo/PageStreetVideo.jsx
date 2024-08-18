import HtmlVideo from "../HtmlVideo";
import { Routes, Route } from "react-router-dom";
import SecretSpot from "./secretSpot/SecretSpot";
import Zikkyrat from "./zikkyrat/Zikkyrat";

const PageStreetVideo = ({disciplineRoute}) => {
    return ( 
        <div>
            PageStreetVideo
            {/* <HtmlVideo discipline={discipline}/> */}
            <Routes>
                <Route path="/" element={ <HtmlVideo disciplineRoute={disciplineRoute} />}/>
                <Route path="/secretSpot" element={ <SecretSpot /> }/>
                <Route path="/Zikkyrat" element={ <Zikkyrat /> }/>
            </Routes>
        </div>
        
     );
};
                           
export default PageStreetVideo; 