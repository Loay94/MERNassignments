import './App.css';
import PersonCard from "./components/PersonCard"
function App() {
  return (
    <div className="App">
     <PersonCard firstName="John" lastName="Smith" age={ 88 } hairColor="Brown" /> 
     <PersonCard firstName="Loay" lastName="Joude" age={ 24 } hairColor="Black" /> 
     <PersonCard firstName="John" lastName="Wick" age={ 47 } hairColor="Brown" /> 
     <PersonCard firstName="Mohamad" lastName="Salem" age={ 55 } hairColor="Black" /> 
    </div>
  );
}

export default App;
