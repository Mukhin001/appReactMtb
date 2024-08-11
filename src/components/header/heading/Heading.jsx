import ApiCityLogin from "./apiCityLogin/ApiCityLogin";
import Search from "./search/Search";
import st from './style.module.css';
import { nameOne } from '../../mobileFile/mobile';

const Heading = ({loginExit, linkExit, getPhotoFn, setSearchPhoto, getVideoFn}) => {
    console.log(nameOne);
    
    
    
    return ( 
        <div className={st.Heading}>
            <div className={st.logoAndSerch}>
                <h3></h3>
                <Search getPhotoFn={getPhotoFn} setSearchPhoto={setSearchPhoto} getVideoFn={getVideoFn}/>
            </div>
            <ApiCityLogin loginExit={loginExit} linkExit={linkExit}/>
        </div>
     );
}
 
export default Heading;