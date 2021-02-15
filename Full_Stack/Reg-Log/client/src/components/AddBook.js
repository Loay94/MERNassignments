import React,{useState} from 'react'
import axios from "axios"
import { navigate } from '@reach/router';

const AddBook = () => {

        const[name,setName] =useState("")

        const onSubmitHandler = e => {
            e.preventDefault();
            axios.post('http://localhost:8000/api/addbook', {
                name,
            })
                .then(() => navigate("/home"))
                .catch(err=>console.log(err))
        }
    return (
        <div>
             <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name OF Book </label><br/>
                <input id="text" type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <input type="submit"/>

            </form>
        </div>
    )
}

export default AddBook
