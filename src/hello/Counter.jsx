import React, {useState} from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0)
    return <>
    <h1>카운터</h1>
    <h2>{number}</h2>
    <button onClick = { () => setNumber(number + 1)}> + </button>
    <button onClick = { () => setNumber(number - 1)}> - </button>
    </>
}
export default Counter