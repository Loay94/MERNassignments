import React,{useState,useEffect} from 'react'

const ListComponent = () => {
    
    const [people,setPeople]=useState([]);

    const onClickHandler = ()=>{ 
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => response.json())
    .then(response=>setPeople(response.results))
        
    };

    return (
        <ol>
            
            <input type="submit" value="Fetch" onClick={onClickHandler}/>
            {
                
            people.length>0 && people.map((person,index)=>
            
             (<li key={index}>{person.name}</li>)
        
            
            
            )
            
            } 
           
             </ol>
    )
}

export default ListComponent