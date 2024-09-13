import { useEffect, useState } from "react";
import st from './style.module.css';

const BtnUp = () => {

    const [btnToDisplay, setBtnToDisplay] = useState('-30');

    function btnAppTo() {
        window.scrollTo({top: 0, left: 0, behavior: "smooth",});
    };

    useEffect(() => {

        function scrollHeight() {
            if( this.window.scrollY > (document.documentElement.clientHeight / 3)) {
                setBtnToDisplay('10');
            } else {
                setBtnToDisplay('-30');
            }
        };

        window.addEventListener('scroll', scrollHeight);

        return () => {
            window.removeEventListener('scroll', scrollHeight);
          }

    }, []);

    return ( 
        <>
            <button onClick={btnAppTo} className={st.btnApp} style={{bottom: `${btnToDisplay}px`}}>up</button>
        </>
     );
}
 
export default BtnUp;