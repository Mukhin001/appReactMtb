import { useState } from "react";

const MainNoLogin = () => {
    const [createUserName, getCreateUserName] = useState('');
    const [createUserEmail, getcreateUserEmail] = useState('');
    const [createPassowordOne, getCreatePassowordOne] = useState('');    
    const [createPassowordTwo, getCreatePassowordTwo] = useState(''); 

    function getUserNameFn(e) {
        getCreateUserName(e.target.value);
    };

    function getUserEmail(e) {
        getcreateUserEmail(e.target.value);
    };

    function getUserpasswordOneFn(e) {
        getCreatePassowordOne(e.target.value);
    };

    function getUserpasswordTwoFn(e) {
        getCreatePassowordTwo(e.target.value);
    };

    function createAccauntFn() {
        const EMAIL = ['@mail', '@yandex', '@google', '@rambler'];

        if(createPassowordOne === createPassowordTwo) {
            console.log(createUserName, createPassowordOne);
        }
        for(let elem of EMAIL) {
            if(createUserEmail.toLowerCase().includes(elem)) {
                console.log('true');
            }
        }
    };

    return ( 
        <div>
            <div>
                <label htmlFor="login">login</label>
                <input type="text" id="login"  onChange={getUserNameFn}/>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" id="email" onChange={getUserEmail}/>
            </div>
            <div>
                <label htmlFor="password1">password</label>
                <input type="password" id="password1" onChange={getUserpasswordOneFn}/>
            </div>
            <div>
                <label htmlFor="password2">password</label>
                <input type="password" id="password2" onChange={getUserpasswordTwoFn}/>
            </div>
            <button onClick={createAccauntFn}>Create accaunt</button>
        </div>
     );
}
 
export default MainNoLogin;