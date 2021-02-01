
import Header from"./components/Header"
import MessageDisplay from"./components/MessageDisplay"
import MessageForm from "./components/MessageForm"
import React,{useState} from 'react';

function App() {
  const [currentMsg, setCurrentMsg] = useState([]);

  const youveGotMail = ( newMessage ) => {
    setCurrentMsg( currentMsg.concat(newMessage) );
}



  return (
    <div >
    <MessageForm youveGotMail={youveGotMail} />
    <MessageDisplay message={currentMsg}/>
    </div>
  );
}

export default App;
