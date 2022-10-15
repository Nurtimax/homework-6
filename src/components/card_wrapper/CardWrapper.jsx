import React from 'react'
import './CardWrapper.css'

const CardWrapper = ({children}) => {
  return (
    <div className='wrapper'>
      {children}
    </div>
  )
}

export default CardWrapper
