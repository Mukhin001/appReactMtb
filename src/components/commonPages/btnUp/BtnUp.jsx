import { useState } from "react";
import st from './style.module.css';

const BtnUp = () => {

    const [btnToDisplay, setBtnToDisplay] = useState('none');
    
    window.addEventListener('scroll', function() {
       
        if( this.window.scrollY > (document.documentElement.clientHeight / 3)) {
            setBtnToDisplay('block');
        } else {
            setBtnToDisplay('none');
        }
    });

    function btnAppTo() {
        window.scrollTo({top: 0, left: 0, behavior: "smooth",});
    };

    return ( 
        <>
            <button onClick={btnAppTo} className={st.btnApp} style={{display: `${btnToDisplay}`}}>up</button>
        </>
     );
}
 
export default BtnUp;