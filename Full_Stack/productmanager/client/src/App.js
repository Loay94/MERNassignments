import './App.css';
import Main from './views/Main'
import { Router } from '@reach/router';
import Detail from './views/Detail';
function App() {
  return (
    <div className="App">
     <Router>
        <Main path="addproduct/"/>
        <Detail path="product/:id" />
      </Router>
    </div>
  );
}

export default App;
