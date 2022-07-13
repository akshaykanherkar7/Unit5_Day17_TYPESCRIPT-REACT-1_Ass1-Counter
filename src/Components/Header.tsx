import React from 'react'

interface IHeaderProps {
    label?: string
}
const Header = ({label = "Counter"} : IHeaderProps) => {
  return (
    <>
    <h3>{label}</h3>
    </>
  )
}

export default Header