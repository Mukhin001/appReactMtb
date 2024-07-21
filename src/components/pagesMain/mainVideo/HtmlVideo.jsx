import {videoServer} from './videoServer';

const HtmlVideo = ({discipline}) => {
    return ( 
        <div>
            <ul>
                {videoServer.map((obj) => {
                    return (
                        (obj.discipline === discipline) && 
                        obj.content.map((e) => {
                            return (
                                <li key={e.name}>{e.name}
                                    <video src="#">video</video>
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