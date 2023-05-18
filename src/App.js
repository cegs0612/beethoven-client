import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Catalog from "./pages/Catalog";
import Bibliography from "./pages/Bibliography";

function App() {
  return (
    <div className="App">
      <div className='App-body'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Biography' element={<Biography/>} />
          <Route path='/Catalog' element={<Catalog/>} />
          <Route path='/Bibliography' element={<Bibliography/>} />
        </Routes>
      </Router>
      </div>     
    </div>
  );
}

export default App;
