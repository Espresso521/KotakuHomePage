import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

let inter = null

function App () {

  const [num, setNum] = useState(1)

  const fn = () => {
    // console.log('add 1')
    setNum(num + 1)
  }

  const fnDel = () => {
    // console.log('del 1')
    setNum(num - 1)
  }

  const btnStyle = {
    color: 'red',
    fontSize: '51px'
  }

  const autoAdd = (flag = true) => {
    console.log('Mouse down!')
    const tt = () => {
      inter = setInterval(() => {
        if (flag)
          setNum(num => num + 1)
        else
          setNum(num => num - 1)
      }, 100)
    }

    tt()
  }

  const autoAddEnd = () => {
    console.log('Mouse up!')
    clearInterval(inter)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello 胡牧之！！</h1>
        <h1>Hello My Son! I Love U!</h1>
        <h2>Number is : {num}</h2>
        <button onMouseDown={() => { autoAdd() }} onMouseUp={autoAddEnd}
          onTouchStart={() => { autoAdd() }} onTouchEnd={autoAddEnd}
          onClick={fn} style={btnStyle}>Add</button>

        <button onMouseDown={() => { autoAdd(false) }} onMouseUp={autoAddEnd}
          onTouchStart={() => { autoAdd(false) }} onTouchEnd={autoAddEnd}
          onClick={fnDel} style={btnStyle}>Delete</button>
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
  )
}

export default App
