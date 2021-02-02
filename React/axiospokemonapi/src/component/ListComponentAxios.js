import axios from 'axios';
import React,{useState} from 'react'

const ListComponent = () => {
    
    const [people,setPeople]=useState([]);
    const onClickHandler = ()=>{ 
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => {
        console.log(response);
        return response;})
    .then(response => setPeople(response.data.results.map(item => item.name)))
        
    };

    return (
        <div>
        <input type="submit" value="Fetch" onClick={onClickHandler}/>
        <ol>
            {
            
            people.map((person , index)=>
            
                (<li key={index} >{person}</li>)
            
            )
            
                }
            </ol>
            </div>
    )
}

export default ListComponent