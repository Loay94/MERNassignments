import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const People = (props) => {

    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + props.id +'/')
            .then(response => {
                setError("")
                setResult(response.data)
            }).catch((error) => {
                error.response ? setError("These aren't the droids you're looking for") : setError("Unidentified error")
            })}, [])
    
    return (
        <div>
        <h1>Name: {result.name}</h1>
        <p>Heigth: {result.height}</p>
        <p>Mass: {result.mass}</p>
        <p>Skin Color: {result.skin_color}</p>
    
    {error ?
    <>
    <p>{error}</p>
    <img src="https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png"/>
    </>
    :
    ''
    }
</div>
    )
}

export default People
