import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import { Router } from '@reach/router';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Registration  path="registration/" />
        <Login path="login/"/>
        <Home path="home/" />
        {/* <Update path="product/:id/edit"/> */}
      </Router>
    </div>
  );
}

export default App;
