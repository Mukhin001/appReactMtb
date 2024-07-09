import About from './about/About';
import Contacts from './contacts/Contacts';
import Info from './info/Info';
import st from './style.module.css';

const Footer = () => {
    return ( 
        <footer>
            <div className={st.footerWrapper}>
                <h4>Footer</h4>
                <ul className={st.footerUl}>
                    <li>App-react-mtb</li>
                    <li>About us
                        <About />
                    </li>
                    <li>Information
                        <Info />
                    </li>
                    <li>Contacts
                        <Contacts />
                    </li>
                </ul>
                <div className={st.end}>
                    End!
                </div>
            </div>
        </footer>
     );
}
 
export default Footer; 