import React, { useState } from  'react';
import  "./form.css";
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [comfirmPasswordError, setComfirmPasswordError] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password ,confirmpassword};
        console.log("Welcome", newUser);
    };

    const firstNameVal = (e) =>{
        setFirstname(e.target.value)
        if(e.target.value.length<2 ){
            setFirstNameError("First Name must be at least 2 charactor");
        }
        else {setFirstNameError(" ");}
    }
    
    
    const lastNameVal = (e) =>{
        setLastname(e.target.value)
        if(e.target.value.length<2){
            setLastNameError("Last Name must be at least 2 charactor");
        }
        else {setLastNameError(" ");}
    };
    const emailErrorVal = (e) =>{
        setEmail(e.target.value)
        if(e.target.value.length<5){
            setEmailError("Email must be at least 5 charactor");
        }
        else {setEmailError(" ");}
    };
    const passwordErrorVal = (e) =>{
        setPassword(e.target.value)
        if(e.target.value.length<8){
            setPasswordError("Password must be at least 8charactor");
        }
        else {setPasswordError(" ");}
    };
    const comfirmPasswordErrorVal = (e) =>{
        setConfirmPassword(e.target.value)
        if(e.target.value !== password){
            setComfirmPasswordError("Passwords must match");
        }
        else {setComfirmPasswordError(" ");}
    }

    return(
        <div className="form">
        <form onSubmit= { createUser }  >
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={firstNameVal} />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={lastNameVal } />
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{lastNameError}</p> :
                    ''
                }
            </div>

            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={emailErrorVal  } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ passwordErrorVal} />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ comfirmPasswordErrorVal } />
                {
                    comfirmPasswordError ?
                    <p style={{color:'red'}}>{ comfirmPasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        <div>
            <h5>first name : {firstname}</h5>
            <h5> last name : {lastname}</h5>
            <h5> email : {email}</h5>
            <h5> password :{password}</h5>
        </div>
        </div>
    );
};
    
export default UserForm;