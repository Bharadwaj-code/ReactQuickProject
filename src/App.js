import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
    </div>
  );
}
function Header() {
  return (
    <div className="header">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Intro />
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

function Intro() {
  return (
    <div className="intro">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}
export default App;
