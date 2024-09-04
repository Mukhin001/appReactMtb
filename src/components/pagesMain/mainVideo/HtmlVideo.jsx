import {videoServer} from './videoServer';
import { NavLink } from 'react-router-dom'

const HtmlVideo = ({disciplineRoute}) => {
 
    return ( 
        <div>
            <ul>
                {videoServer.map((obj) => {
                    return (
                        (obj.discipline === disciplineRoute) && 
                        
                        obj.content.map((e, i) => {
                            return (
                                <li key={e.name + 'video'}>{e.name}{obj.discipline}
                                    <video src="#">video</video>
                                    <NavLink to={`/video/${obj.discipline}/${e.name}`}>{e.name}</NavLink>
                                </li>
                            )
                        })
                    )     
                })}
            </ul>
        </div>
     );
};
 
export default HtmlVideo;