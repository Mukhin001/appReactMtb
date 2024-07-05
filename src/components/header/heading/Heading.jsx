import ApiCityLogin from "./apiCityLogin/ApiCityLogin";
import Search from "./search/Search";
import st from './style.module.css'

const Heading = ({loginExit, linkExit}) => {
  
    return ( 
        <div className={st.Heading}>
            <div className={st.logoAndSerch}>
                <h3>App-React-Mtb</h3>
                <Search />
            </div>
            <ApiCityLogin loginExit={loginExit} linkExit={linkExit}/>
        </div>
     );
}
 
export default Heading;