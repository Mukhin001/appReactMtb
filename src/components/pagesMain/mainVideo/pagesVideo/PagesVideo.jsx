import { NavLink } from "react-router-dom";
import {videoServer} from '../videoServer';

const PagesVideo = () => {
    return ( 
        <div>
            PagesVideo
            <div>
                <ul>
                    {videoServer.map((obj) => {
                        return (
                            <li key={obj.discipline}><NavLink to={`/video/${obj.discipline}`}>{obj.discipline}</NavLink></li>
                        )
                    })}
                </ul>
            </div>
        </div>
     );
};
 
export default PagesVideo;