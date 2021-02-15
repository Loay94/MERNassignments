import React,{useState , useEffect} from 'react'
import axios from "axios"
import ManagePlayers from './ManagePlayers';

import './ListCss.css';

const List = (props) => {

    const [player,setPlayer]= useState([])
    const [currentPlayer,setCurrentPlayer] = useState("")

    useEffect( () => {
        axios.get("http://localhost:8000/api/getAllPlayers")
        .then(response => setPlayer((response.data)))
        .catch(error => console.log("There was an issue: ", error))
    },[])

    const removeFromDom = id => {
        setPlayer(player.filter(person => person._id != id));
    }
    const deletePlayer = (item) => {
        alert("Are you sure ,you want to remove "+item.name+"???")
        axios.delete("http://localhost:8000/api/delete/"+item._id)
            .then(res => {
                removeFromDom(item._id)
                console.log(item._id);
            })}
    return (
        <div >
            <ManagePlayers />
            <table >
                <tr>
                    <th>Player Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
            {player.length > 0 && player.map((item, index) =>{

            return( 
                    <tr>
                    <td key={index}>{item.name}</td>
                    <td key={index}>{item.position}</td>
                    <td key={index}><button className="buttonTable" onClick={(e)=>{deletePlayer(item)}} key={index}>Delete</button></td>
                </tr>
                
            )
            }
            )}
            </table>

        </div>
    )
}

export default List
