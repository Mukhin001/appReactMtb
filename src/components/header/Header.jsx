import Heading from './heading/Heading';
import NavFixed from './navFixed/NavFixed';
import st from './style.module.css';

const Header = ({userGreeting, loginExit, linkExit, getPhotoFn, setSearchPhoto, getVideoFn}) => {

    return ( 
        <header>

            <div className={st.heading}>
                <Heading loginExit={loginExit} linkExit={linkExit} getPhotoFn={getPhotoFn} setSearchPhoto={setSearchPhoto} getVideoFn={getVideoFn}/>
                <NavFixed />
            </div>

            <h4>{userGreeting}</h4>

        </header>
        
     );
};
    
export default Header;