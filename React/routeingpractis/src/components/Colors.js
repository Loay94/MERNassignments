import React from 'react'

const Colors = (props) => {
    const type = isNaN(props.parameter)? "word" : "number";
    const styleVariable={backgroundColor : props.background , color : props.color};
    return (
        <div>
            <h1 style={styleVariable}>The {type} is: {props.parameter} </h1>
        </div>
    )
}

export default Colors
