import Heading from './heading/Heading';
import NavFixed from './navFixed/NavFixed';

const Header = () => {
    return ( 
        <header>

            <div className='heading'>
                <Heading />
            </div>

            <div className='navFixed'>
                <NavFixed />
            </div>
            
        </header>
     );
}
 
export default Header;