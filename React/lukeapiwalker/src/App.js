import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
      <label >Serch for : </label>
        <select id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      </form>
    </div>
  );
}

export default App;
