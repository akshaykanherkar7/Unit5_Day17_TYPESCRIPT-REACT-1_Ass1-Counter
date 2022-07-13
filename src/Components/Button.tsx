import React from 'react'

interface IButton {
    label : string
    handleADDCount: () => void
}
const Button = ({ label , handleADDCount } : IButton) => {
  return (
      <button onClick={handleADDCount}>{label}</button>
  )
  
}

export default Button