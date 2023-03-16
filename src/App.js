import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar'
import Footer from './pages/Footer';
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Catalog from "./pages/Catalog";
import Bibliography from "./pages/Bibliography";
import Disclaimer from "./pages/Disclaimer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='App-body'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Biography' element={<Biography/>} />
          <Route path='/Catalog' element={<Catalog/>} />
          <Route path='/Bibliography' element={<Bibliography/>} />
          <Route path='/Disclaimer' element={<Disclaimer/>} />
        </Routes>
      </Router>
      </div>     
      <Footer/>
    </div>
  );
}

export default App;
