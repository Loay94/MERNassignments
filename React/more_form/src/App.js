import UserForm from "./components/validation"
import './App.css';

function App() {
  const test ="loay"
  const test2 ="joudi "
  const test3 ="loayjoude"


  return (
    <div className="App">
      <UserForm/>
    <h1>{test}</h1>
    <h1>{test2}</h1>
    <h1>{test3}</h1>
    </div>
  );
}

export default App;
