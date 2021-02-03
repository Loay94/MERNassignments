import './App.css';
import { Router } from '@reach/router';
import React from 'react';
import Home from './components/Home'
import Parameter from './components/Parameter'
import Colors from './components/Colors'
function App() {
  return (
    <div className="App">
      <Router>
            <Home path="/home"/>
            <Parameter path="/:parameter"/>
            <Colors path="/:para/:background/:color"/>
        </Router>
    </div>   
  );
}

export default App;
