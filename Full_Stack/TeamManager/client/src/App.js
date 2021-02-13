import './App.css';
import React from 'react'
import AddPlayer from './components/AddPlayer';
import { Router,Link } from '@reach/router';
import List from './components/List';
import Main from './components/Main';
import ManagePlayers from "./components/ManagePlayers";
import ManageStatus from "./components/ManageStatus";
function App() {
  return (
    <div className="App">
    <h2><Link to="/players">Manage Players </Link> | <Link to="/games">Manage Player Status </Link> </h2>
    <Router>
      <Main path="/" />
       <ManagePlayers path="/players" />
       {/* <ManageStatus path="/games" />  */}
       <List path="/list" />
      <AddPlayer path="/addplayer" />
    </Router>
    </div>
  );
}

export default App;
