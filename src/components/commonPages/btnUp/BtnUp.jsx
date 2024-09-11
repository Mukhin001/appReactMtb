import { useEffect, useState } from "react";
import st from './style.module.css';

const BtnUp = () => {

    const [btnToDisplay, setBtnToDisplay] = useState('none');

    function btnAppTo() {
        window.scrollTo({top: 0, left: 0, behavior: "smooth",});
    };

    useEffect(() => {

        function scrollHeight() {
            if( this.window.scrollY > (document.documentElement.clientHeight / 3)) {
                setBtnToDisplay('block');
            } else {
                setBtnToDisplay('none');
            }
        };

        window.addEventListener('scroll', scrollHeight);

        return () => {
            window.removeEventListener('scroll', scrollHeight);
          }

    }, []);

    return ( 
        <>
            <button onClick={btnAppTo} className={st.btnApp} style={{display: `${btnToDisplay}`}}>up</button>
        </>
     );
}
 
export default BtnUp;