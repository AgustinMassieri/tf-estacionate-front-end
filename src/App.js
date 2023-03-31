import estacionateLogo from './estacionateLogo.png';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (

    <Router>
      <div className="App">
        <header className="App-header">
          <img src={estacionateLogo} className="App-logo" alt="logo" />
          <p>
            <code>ESTACIONATE</code>
            <nav>
              <Link to="/Home">Home</Link>
            </nav>
          </p>
        </header>
      </div>

    <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </Router>
  );
}

export default App;
