import Nav from './componete/nav'
import Pagina from './componete/pagina'
import { BrowserRouter as Router, Route} from 'react-router-dom';


import './App.css';

function App() {
  return (

    <div className="App">
      <div>
      <Nav></Nav>
      </div>
      <div>
        <Pagina> </Pagina>
      </div>
    </div> 

   
  );
}

export default App;

