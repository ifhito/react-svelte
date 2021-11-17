import logo from './logo.svg';
import './App.css';
import test from './svelte/test.svelte';
import { useEffect, useRef } from 'react';
import toReact from "svelte-adapter/react";
function App() {
  const SvelteInReact = toReact(test,{},'div');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <SvelteInReact />
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
