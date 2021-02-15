import React,{useState , useEffect } from 'react'
import AddBook from './AddBook';
import axios from "axios"

const Home = (props) => {
    const [book,setBook]= useState([])

    useEffect( () => {
        axios.get("http://localhost:8000/api/getAllBooks")
        .then(response => setBook((response.data)))
        .catch(error => console.log("There was an issue: ", error))
    },[])

    return (
        <div>
            <table >
                <tr>
                    <th>Book Name</th>
                </tr>
            {book.length > 0 && book.map((item, index) =>{

            return( 
                    <tr>
                    <td key={index}>{item.name}</td>
                    {/* <td key={index}><button className="buttonTable" onClick={(e)=>{addHandler(item)}} key={index}>Add</button></td> */}
                </tr>
            )
            }
            )}
            </table>
        
        <AddBook />
        </div>
    )
}

export default Home
