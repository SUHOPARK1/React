import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


const ToDoInput = () => {
    const [ todo, setTodo ] = useState('')
    const dispatch = useDispatch()
    const addTodo = todo => dispatch(addTodoAction(todo))
    const { v4: uuidv4 } = require('uuid')
    const submitForm = e => {
        e.preventDefault()
        const newTodo = {
            todoId: uuidv4(),
            name: todo,
            complete: false
           
        }
        addTodo(newTodo)
        setTodo("")
    }
    const handleChange = e => {
        e.preventDefault()
        setTodo(e.target.value)
    }

    return <>
        <form onSubmit = {submitForm} method="POST">
            <div className="row mt-3">
                <div className="form-group col-sm-8">
                    <input
                        type="text"
                        placeholder="할일 입력"
                        name="todo"
                        className="form-control"
                        value={todo}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-sm-4">
                    <button type="submit" className="btn btn-primary btn-md">
                        할일 추가
                    </button>
                </div>
            </div>
        </form>
    </>
}
export default ToDoInput