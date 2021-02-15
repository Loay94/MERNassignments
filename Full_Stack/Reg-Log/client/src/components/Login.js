import React,{useState} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const Login = () => {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', {
            email,
            password,
        })
            .then(res=>{console.log(res)
            
                navigate("home/")
            })
            .catch(err=>console.log(err))
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
            <p>
                <label>Email</label><br/>
                <input id="text" type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </p>
            <p>
                <label>Password</label><br/>
                <input id="text" type="text" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </p>
            <input type="submit"/>

            </form>
        </div>
    )
}

export default Login
