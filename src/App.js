import logo from './logo.svg';
import './App.css';
import {lazy, Suspense} from 'react';
import 'helloWorld_app/Hello';
function App() {
  // const SvelteInReact = toReact(test,{},'div');
  return (
    <div className="App">
      <header className="App-header">
        <test-1 />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
