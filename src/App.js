import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Tania'
  const dept = 'CSE'
    const heading = <h1>Hello, {name} {dept} Good evening</h1>
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {heading}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
