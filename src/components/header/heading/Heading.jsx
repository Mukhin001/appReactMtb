import ApiCityLogin from "./apiCityLogin/ApiCityLogin";
import st from './style.module.css'

const Heading = () => {
    return ( 
        <div className={st.Heading}>
            <h3>App-React-Mtb</h3>
            <ApiCityLogin />
        </div>
     );
}
 
export default Heading;