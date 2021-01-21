import React, { useContext } from 'react'
import { NumberContext } from './NumberProvider'

export default function CalculatorButton({buttonValue}){
    const { handleSetDisplayValue } = useContext( NumberContext )
   
    return (
        <button type="button" 
        onClick = { () => handleSetDisplayValue(buttonValue)}>
            {buttonValue}
        </button>
        
    )
}

