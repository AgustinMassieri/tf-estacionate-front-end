import estacionateLogo from './estacionateLogo.png';
import './App.css';

function Home() {

  return(
    <div className="App">
      <header className="App-header">
        <img src={estacionateLogo} className="App-logo" alt="logo" />
        <p>
          <code>ESTACIONATE</code>
        </p>
      </header>
    </div>
  );
}

 export default Home;