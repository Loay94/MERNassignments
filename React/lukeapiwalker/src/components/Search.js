import React , {useState , useEffect    } from 'react'
import {navigate} from '@reach/router';

const Search = () => {
    const [id,setId] = useState (1)
    const [option,setOption] = useState("people")
    const[choice, setChoice] = useState("");
    const[error, setError] = useState("")


    

    const idHandler =(e) =>{
        setId(e.target.value)
    }

    const searchDone =(e) =>{
        e.preventDefault();
        choice ==="people"? navigate('/people/' + id) : navigate('/planets/'+ id)
        };
    


    return (
        <div>
        <form onSubmit={searchDone}>
        <select onChange={e => setChoice(e.target.value)} labelId="choice" id="choice">
                <option value="people">Person</option>
                <option value="planets">Planet</option>
            </select>
            <input type="number" onChange={idHandler}/>
            <input type="submit" value="Search"/>
        </form>
        </div>
    )
}

export default Search
