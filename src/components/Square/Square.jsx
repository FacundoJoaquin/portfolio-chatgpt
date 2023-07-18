import React from 'react'
import './Square.css'

const Square = ({children}) => {
  return (
    <div className='square-letter'>
    {children}
  </div>
  )
}

export default Square