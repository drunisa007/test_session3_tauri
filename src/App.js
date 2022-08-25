import './App.css';

import { invoke } from '@tauri-apps/api';
import logo from './logo.svg';

function App() {

  invoke("hello",{"name":"Aung Thu"}).then((value)=>{
    console.log(value);
  })

  return (
    <div className="App">
      <header className="App-header">
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
