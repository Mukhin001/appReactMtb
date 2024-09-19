import ApiCityLogin from "./apiCityLogin/ApiCityLogin";
import Search from "./search/Search";
import st from './style.module.css';
import { ContextClientWidth } from '../../../App';

const Heading = ({loginExit, linkExit, getPhotoFn, setSearchPhoto, setSearchVideo, getVideoFn, searchUserTextFn, theme, likesLength }) => {
    
    return ( 
       
            <div className={st.Heading}>
                <div className={st.logoAndSerch}>
                <ContextClientWidth.Consumer>
                    { value => <h3>{(value < 450) ? 'A-R-MTB' : 'App-React_MTB'}</h3>}
                </ContextClientWidth.Consumer>
                    
                    <Search theme={theme} getPhotoFn={getPhotoFn} setSearchPhoto={setSearchPhoto} getVideoFn={getVideoFn} setSearchVideo={setSearchVideo} searchUserTextFn={searchUserTextFn}/>
                    
                </div>
                <ApiCityLogin loginExit={loginExit} linkExit={linkExit} theme={theme} likesLength={likesLength}/>
            </div>
 
        
     );
}
 
export default Heading;