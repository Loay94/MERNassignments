import React from 'react'

const MessageDisplay = (props) => {
    return (
        <div>
            <h1>Current Message</h1>
            <div>{ props.message.map((item,i)=>{
                let style={background:item,height:"100px",width:"100px",border:"1px solid black"}
            return    <p key={i} style={style}>Box</p>
            }) }</div>
        </div>
    )
}

export default MessageDisplay
