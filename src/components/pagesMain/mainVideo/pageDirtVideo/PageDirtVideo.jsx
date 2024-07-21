import HtmlVideo from "../HtmlVideo";
import { Routes, Route } from "react-router-dom";
import Shelcovo from "./shelcovo/Shelcovo";
import LosPark from "./losPark/LosPark";

const PageDirtVideo = ({disciplineRoute}) => {
    return ( 
        <div>
            PageDirtVideo
           
            <Routes>
                <Route path="/" element={ <HtmlVideo disciplineRoute={disciplineRoute} />}/>
                <Route path="/shelcovo" element={ <Shelcovo /> }/>
                <Route path="/lospark" element={ <LosPark /> }/>
            </Routes>
        </div>
     );
};
 
export default PageDirtVideo;