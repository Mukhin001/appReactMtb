import Heading from './heading/Heading';
import NavFixed from './navFixed/NavFixed';

const Header = ({userGreeting, loginExit, linkExit}) => {
  
    return ( 
        <header>

            <div className='heading'>
                <Heading loginExit={loginExit} linkExit={linkExit}/>
            </div>

            <h4>{userGreeting}</h4>

            <div className='navFixed'>
                <NavFixed />
            </div>
            
        </header>
     );
}
 
export default Header;