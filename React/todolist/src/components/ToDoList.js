import React from 'react'
import {useState} from 'react'
const ToDoList = () => {
    const [todoList,setTodoList] = useState([{name:"this is my ",checkbox:false}])
        const clickHandler=()=>{
            let name = document.getElementById("text").value
            setTodoList(todoList.concat({name : name, checkbox:false}))
            document.getElementById("text").value =" ";
        }
        const clickCheck =(e,index) =>{
            setTodoList(todoList.map((item,i)=> i===index ?
            {name : item.name , checkbox : e.target.checked} : {name : item.name, checkbox : item.checkbox}
            ))
        }

        const deleteHandler = e => {

            setTodoList(todoList.filter( (item, i) => i !== parseInt(e.target.id)));
        }


    return (
        <div>
            {
                todoList.map((item,index) =>
                {
                    
                    return <div key={index} >
                        
                        {item.name}
                    <input id={index} onClick={ deleteHandler} type ="button" value="Delete"/>
                    <input id={index} type ="checkbox" onChange={e => clickCheck(index)} defaultChecked={item.checkbox}/>
                    </div>
                })
                
            }
            <div>
                <input type="textarea" id="text" />
                <input type="button" onClick={clickHandler} value="add"/>
            </div>
        </div>
    )
}

export default ToDoList
