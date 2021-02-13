import './App.css';
import {Router} from "@reach/router";
import React, { useState } from 'react';
import UpdateAuthor from "./components/UpdateAuthor"
import AuthorsTable from "./components/AuthorsTable"
import CreateAuthorForm from "./components/CreateAuthorForm"


function App() {
  return (
    <div className="App">
    <Router>
      <AuthorsTable path="/"/>
      <CreateAuthorForm path="/new" />
      <UpdateAuthor path="author/:id/edit" />
    </Router>
    </div>
  );
}

export default App;
