import React from 'react'
import { useState } from 'react'

let inter = null
export default function App1 () {
  const [num, setNum] = useState(0)

  const fn = () => {
    console.log('fn in')
    const tt = () => {
      inter = setInterval(() => {
        console.log("here")
        setNum(num => num + 1)
      }, 300)
    }

    tt()
  }

  const cls = () => {
    clearInterval(inter)
  }

  return (
    <div>App1
      <button onClick={fn}>test</button>
      <button onClick={cls}>test1111</button>
      <label>{num}</label>
    </div>
  )
}
