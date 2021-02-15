import React,{useState} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const Registration = () => {
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[country,setCountry]=useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', {
            firstName,
            lastName,
            email,
            password,
            country
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input id="text" type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input id="text" type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
            </p>
            <p>
                <label>Email</label><br/>
                <input id="text" type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </p>
            <p>
                <label>Password</label><br/>
                <input id="text" type="text" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </p>
            <p>
                <label>Country</label><br/>
                <input id="text" type="text" onChange={(e)=>setCountry(e.target.value)} value={country}/>
            </p>
            <p><Link to ="login/">press here if you hava account</Link></p>
            <input type="submit"/>
        </form>
        </div>
    )
}

export default Registration
