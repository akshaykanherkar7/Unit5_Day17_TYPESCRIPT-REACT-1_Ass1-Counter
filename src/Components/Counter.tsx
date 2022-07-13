import React, { useState } from 'react'
import Button from './Button'
import Header from './Header'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleCount = (val : number) => {
        setCount(count + val)
    }
  return (
    <div>
        <Header></Header>
        <Header label={`${count}`}></Header>
        <Button label="ADD" handleADDCount={() => handleCount(1)}></Button>
        <Button label="REDUCE" handleADDCount={() => handleCount(-1)}></Button>
    </div>
  )
}

export default Counter