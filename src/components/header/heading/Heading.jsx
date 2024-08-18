import ApiCityLogin from "./apiCityLogin/ApiCityLogin";
import Search from "./search/Search";
import st from './style.module.css';
import { ContextClientWidth } from '../../../App';

const Heading = ({loginExit, linkExit, getPhotoFn, setSearchPhoto, getVideoFn}) => {
    
    return ( 
       
            <div className={st.Heading}>
                <div className={st.logoAndSerch}>
                <ContextClientWidth.Consumer>
                    { value => <h3>{(value < 450) ? 'A-R-MTB' : 'App-React_MTB'}</h3>}
                </ContextClientWidth.Consumer>
                    
                    <Search getPhotoFn={getPhotoFn} setSearchPhoto={setSearchPhoto} getVideoFn={getVideoFn}/>
                    
                </div>
                <ApiCityLogin loginExit={loginExit} linkExit={linkExit}/>
            </div>
 
        
     );
}
 
export default Heading;