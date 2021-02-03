import React,{ useState} from 'react'
const Tabs = () => {
    const[paragraph, setParagraph]=useState("Welcome !!")
    const onClickOne = (e) =>{
        setParagraph(" Tab 1 content is showing here.")
    }
    const onClickTwo = (e) =>{
        setParagraph(" Tab 2 content is showing here.")
    }
    const onClickThree = (e) =>{
        setParagraph(" Tab 3 content is showing here.")
    }


    return (
        <div>
            <button onClick={onClickOne}>Tab One </button>
            <button onClick={onClickTwo}>Tab Two </button>
            <button onClick={onClickThree}>Tab Three </button>
            <h1>{paragraph}</h1>
        </div>
    )
}

export default Tabs
