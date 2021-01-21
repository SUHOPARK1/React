import React, { useContext } from 'react'
import { NumberContext } from './NumberProvider'
import { DisplayStyles } from './styles/Style'
export default function Display(){
    const { number, storedNumber, functionType } = useContext(NumberContext)
    
    return (<DisplayStyles>
        <h2 className={storedNumber && storedNumber.length > 12 ? 'long-main-display' : undefined}>
            {!number.length && !storedNumber ?  '0': number || storedNumber}
        </h2>
        <p className={storedNumber && storedNumber.length > 12 ? 'long-stored-display' : undefined}>
            {!storedNumber ? `값을 입력해주세요` : `${storedNumber} ${functionType} ${number}`}
        </p>
    </DisplayStyles>)
}
