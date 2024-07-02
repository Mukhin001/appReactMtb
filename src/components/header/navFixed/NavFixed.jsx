import NavBar from '../../navBar/NavBar';
import st from './style.module.css';

const NavFixed = () => {
    console.log(NavBar);
    return ( 
        <div className={st.wrap}>
            <NavBar className={st.navBarST}/>
        </div>
     );
};
 
export default NavFixed;