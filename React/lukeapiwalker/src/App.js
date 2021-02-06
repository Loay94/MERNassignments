import './App.css';

function App() {
  return (
    <div className="App">
      <form>
      <label >Search for : </label>
        <select id="types">
        <option value="planet">Planets</option>
        <option value="pepole">Pepole</option>
      </select>
      <label> ID : </label>
      <input type="number" />
      <button >Search</button>
      </form>
    </div>
  );
}

export default App;
