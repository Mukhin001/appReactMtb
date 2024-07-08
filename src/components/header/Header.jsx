import Heading from './heading/Heading';
import NavFixed from './navFixed/NavFixed';
import st from './style.module.css';

const Header = ({userGreeting, loginExit, linkExit}) => {
  
    return ( 
        <header>

            <div className={st.heading}>
                <Heading loginExit={loginExit} linkExit={linkExit}/>
                <NavFixed />
            </div>

            <h4>{userGreeting}</h4>
            
        </header>
     );
}
 
export default Header;