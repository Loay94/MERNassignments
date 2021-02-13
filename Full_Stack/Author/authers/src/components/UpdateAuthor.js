import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { navigate, Link } from "@reach/router"

const UpdateAuthor = (props) => {

    const { id } = props;
    const [name , setName ]= useState("");
    const [errors, setErrors] = useState([])


    useEffect(() =>{
        axios.get('http://localhost:8000/api/getAuthor/'+id)
        .then(res =>{setName( res.data.name)} );
    }, [])
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/update/' + id , {
            name : name,
                })
            .then(() => navigate("/"))
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
            <h1>Update a Author</h1>
            <p><Link to="/">Home</Link></p>
            <form onSubmit={ updateProduct }>
                <div className="form-group">
                    <label>Name: {errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)}</label>
                    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="form-group text-right">
                    <button onClick={()=>navigate("/")} type="button" className="btn btn-secondary btn-sm">Go Back</button>
                    <button className="btn btn-primary btn-sm" style={{marginLeft: "10px"}}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateAuthor
