import React, { useState } from "react"
import axios from "axios"
import { navigate, Link } from "@reach/router"
import ManagePlayers from './ManagePlayers';
import './ListCss.css';

const AddPlayer = () => {

    const [name,setName]= useState("")
    const [position,setposition]= useState("")
    const [errors, setErrors] = useState([])

    const onSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/createPlayer", {
            name: name,
            position : position
        })
            .then(() => navigate("/list"))
            .catch(err =>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                
            })
    }
    return (
        <div>
            <ManagePlayers />
            <form onSubmit={ onSubmit }>
                        <div className="form-group">
                        {
                            errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}<br/></small>)
                        }
                            <label>Name:</label>
                            <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Position:</label>
                            <input onChange={(e)=>setposition(e.target.value)} type="text" className="form-control"/>
                        </div>
                        <div >
                            <button className="btn" >Submit</button>
                        </div>
                    </form>
        </div>
    )
}

export default AddPlayer
