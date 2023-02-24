import logo from './logo.svg';
import './App.css';
import Home from './Component/Home' 
import Castingcalldescription from './Component/castingcall_description';
import Crewdescription from './Component/crew_description';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      

      <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route exact path="/castingcall"  element={<Castingcalldescription/>} />
        <Route exact path="/crew" element={<Crewdescription/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
