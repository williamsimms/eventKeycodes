import React from 'react'
import './Key.scss'

interface KeyProps {
  text: any
  keyCode: any
  code: any
  keyboardKey: any
}

const Key = ({ keyCode, text, code, keyboardKey }: KeyProps) => {
  return (
    <>
      {keyCode ? (
        <>
          <div className='key'>{keyCode}</div>
          <div className='key'>{code}</div>
          <div className='key'>{keyboardKey.toUpperCase()}</div>
        </>
      ) : (
        <div className='key'>{text}</div>
      )}
    </>
  )
}

export default Key
