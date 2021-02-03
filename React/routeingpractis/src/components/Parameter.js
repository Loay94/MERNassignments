import React from 'react'

const Parameter = (props) => {
    const type = isNaN(props.parameter)? "Word" : "Number" ;

    return (
        <div>
            <h1> The {type} is : {props.parameter}</h1>
        </div>
    )
}

export default Parameter
