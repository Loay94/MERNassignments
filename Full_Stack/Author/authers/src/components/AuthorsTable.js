import React, {useState, useEffect} from "react"
import axios from "axios"
import { navigate } from "@reach/router"

const AuthorsTable = (props) => {
    const [authors, setAuthors] = useState([])

    useEffect( () => {
        axios.get("http://localhost:8000/api/getAllAuthors")
            .then(response => setAuthors((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    },[])

    const navigateToNewRoute = () => {
        navigate("/new");
    }
    const handleClick=(e,id) =>{
        e.preventDefault();
        navigate("/author/"+id+"/edit");
    }
    const removeFromDom = id => {
        setAuthors(authors.filter(person => person._id != id));
    }
    
    const deleteAuthor = (id) => {
        axios.delete("http://localhost:8000/api/delete/"+id)
            .then(res => {
                removeFromDom(id)
                console.log(id);
            })
    }

    return (
        <div className="countaineer">
            {authors.length > 0 && authors.map((item, index) =>{

                return( <div>
                    <div key={index}>{item.name}</div>
                    <button onClick={(e) => handleClick(e, item._id)} key={index}>Edit</button>
                    <button onClick={(e)=>{deleteAuthor(item._id)}} key={index}>Delete</button>                
                    </div>
                )
            }
            )}
                <input type="button" value="Please Press Here to Add a New Author" onClick={navigateToNewRoute}/>


        </div>
    )
}

export default AuthorsTable
