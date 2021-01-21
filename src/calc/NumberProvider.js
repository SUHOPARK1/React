import React, { useState } from 'react'

export const NumberContext = React.createContext()

export default function NumberProvider(props) {
    const [ number, setNumber ] = useState('')
    const [ storedNumber, setStoredNumber ] = useState('')
    const [ functionType, setFunctionType ] = useState('')

    

    const handleSetStoredValue = () => {
        setStoredNumber(number)
        setNumber('')
    }

    const handleBackButton = () => {
        if(number !== ''){
            const deleteNumber = number.slice(0, number.length - 1)
            setNumber(deleteNumber)
        }
    }

    const handleClearValue = () => {
        setNumber('')
        setStoredNumber('')
        setFunctionType('')
    }

    const doMatch = () => {
        if(number && storedNumber){
            switch(functionType){
                case '+':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`)
                    break
                case '-':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 100}`) / 100}`)
                    break
                case '*':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) * parseFloat(number)) * 100}`) / 100}`)
                    break
                case '/':
                    setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 100}`) / 100}`)
                    break
                    default: break
            }
            setNumber('')
            setFunctionType('')
        }
    }
    const handleSetDisplayValue = num =>{
        if((!number.includes('.') || num !== '.' ) &&  number.length < 8){
            setNumber(`${(number + num).replace(/^0+/, '')}`)
        }
    }
    const handleSetCalcFunction = type => {
        if (number) {
          setFunctionType(type)
          handleSetStoredValue()
        }
        if (storedNumber) {
          setFunctionType(type)
        }
      }

    const handleToggleNegative = () => {
        if(number){
            if(number > 0){
                setNumber(`-${number}`)
            }else{
                const positiveNumber = number.slice(1)
                setNumber(positiveNumber)
            }
        }else if(storedNumber > 0){
            setStoredNumber(`-${storedNumber}`)
        }else{
            const positiveNumber = storedNumber.slice(1)
            setStoredNumber(positiveNumber)
        }
    }
  


    return (<NumberContext.Provider
    value = {{handleSetDisplayValue, 
             handleBackButton, 
             handleClearValue, 
             doMatch, 
             handleToggleNegative, 
             handleSetStoredValue, 
             handleSetCalcFunction,
             number, 
             functionType,
             storedNumber, 
             setNumber}}
    >
        {props.children}
        
    
    </NumberContext.Provider>)
}

