import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [num, setNum] = useState(1)

  const fn = () => {
    setNum(num+1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello 胡牧之！！</h1>
        <h1>Hello My Son! I Love U!</h1>
        <h2>Number is : {num}</h2>
        <button onClick={fn}>Add</button>
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
