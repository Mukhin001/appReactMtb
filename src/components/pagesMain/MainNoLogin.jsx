import { useState } from "react";
import { NavLink } from "react-router-dom";


const MainNoLogin = ({registerAcc}) => {
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
        let arrPassword = [...'1234567890-=!@#$%^&*()_+[]{};,./<>?'];
        let strElem = createPassowordOne;

        for(let elem of arrPassword) {  
            if(e.target.value.includes(elem) ) {
               strElem += elem;
            } 
        };

        if(e.target.value.length >= 6 && strElem.length >= 3) {
            getCreatePassowordOne(e.target.value);
            alert('good password.');
        } 
        
    };
 
    function getUserpasswordTwoFn(e) {
        getCreatePassowordTwo(e.target.value);
    };

    function createAccauntFn(e) {
        const EMAIL = ['@mail', '@yandex', '@google', '@rambler'];
        
        if(createPassowordOne < 5) {
            e.preventDefault();
            alert('password rait > 6 word');
        } else if(createPassowordOne === createPassowordTwo) {
            localStorage.setItem(createUserName, createPassowordOne);
            registerAcc(createUserName);
        } else {
            e.preventDefault();
            alert("passwords don't match.");
        }

        for(let elem of EMAIL) {
            if(createUserEmail.toLowerCase().includes(elem)) {
                break;
            } else {
                alert('you entered an incorrect email.');
                break;
            }
        }
        
    };
    
    return ( 
        <div>
            {/* <form action="" name="userRegistered"> */}
                <div>
                    <label htmlFor="login">login</label>
                    <input type="text" id="login" name="login" placeholder="login" onChange={getUserNameFn} required/>
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" name="email" placeholder="@email" onChange={getUserEmail} required/>
                </div>
                <fieldset>
                    <legend>gender...</legend>
                    <input type="radio" id="Male" name="gender" defaultChecked/><label htmlFor="Male">Male</label>
                    <input type="radio" id="Female" name="gender"/><label htmlFor="Female">Female</label>
                </fieldset>
                <fieldset>
                    <legend>Choose your interests...</legend>
                    <input type="checkbox" id="Coding" name="checkbox" value="checkbox-empty"/><label htmlFor="Coding">Coding</label>
                    <input type="checkbox" id="Music" name="checkbox" value="checkbox-empty"/><label htmlFor="Music">Music</label>
                    <input type="checkbox" id="Sport" name="checkbox" value="checkbox-empty"/><label htmlFor="Sport">Sport</label>
                    <input type="checkbox" id="Movie" name="checkbox" value="checkbox-empty"/><label htmlFor="Movie">Movie</label>
                </fieldset>
                <div>
                    <label htmlFor="password1">password</label>
                    <input type="password" id="password1" name="password1" placeholder="passowd" onChange={getUserpasswordOneFn} required/>
                </div>
                <div>
                    <label htmlFor="password2">password</label>
                    <input type="password" id="password2" name="password2" placeholder="passowd" onChange={getUserpasswordTwoFn} required/>
                </div>
                <NavLink type="submit" onClick={createAccauntFn} value="Create accaunt" to="/">Create accaunt</NavLink>
                <input type="reset" value="reset" />
            {/* </form> */}
        </div>
     );
}
 
export default MainNoLogin;