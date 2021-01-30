import PersonCard from "./components/propname"
import "./App.css"
function App() {
  return (
    <div className="App">
    <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} /> 
    <PersonCard firstName={"Jone"} lastName={"Smith"} age={88} hairColor={"Brown"} /> 
    <PersonCard firstName={"Millard"} lastName={"Joi"} age={44} hairColor={"White"} /> 
    <PersonCard firstName={"Loay"} lastName={"Joude"} age={24} hairColor={"Black with little white"} /> 
    </div>
  );
}

export default App;
