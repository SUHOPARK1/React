import React from 'react'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import { Provider } from 'react-redux'
import { store } from './store'
export default function Schedule(){
    return (<>
    <Provider store={store}>
        <ToDoInput/>
        <ToDoList/>
        </Provider>
    </>)
}