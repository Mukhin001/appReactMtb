import ApiCityLogin from "./apiCityLogin/ApiCityLogin";
import st from './style.module.css'

const Heading = ({loginExit, linkExit}) => {
  
    return ( 
        <div className={st.Heading}>
            <h3>App-React-Mtb</h3>
            <ApiCityLogin loginExit={loginExit} linkExit={linkExit}/>
        </div>
     );
}
 
export default Heading;