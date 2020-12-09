import React, { useState } from 'react'
import Key from './components/Key/Key'
import './App.scss'

const App = () => {
  const [keyCode, setKeyCode] = useState(0)
  const [key, setKey] = useState('')
  const [code, setCode] = useState('')
  const keyText = 'Press a key to get the code'

  window.addEventListener('keydown', (e) => {
    setKeyCode(e.keyCode)
    setKey(e.key)
    setCode(e.code)
  })

  return (
    <div className='app'>
      <Key text={keyText} code={code} keyboardKey={key} keyCode={keyCode} />
    </div>
  )
}

export default App
