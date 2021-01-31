import React, { useState } from  'react';
import  "./form.css";
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password ,confirmpassword};
        console.log("Welcome", newUser);
    };
    
    return(
        <div className="form">
        <form onSubmit={ createUser } >
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>

            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
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