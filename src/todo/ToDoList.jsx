import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodoAction, deleteTodoAction} from './store/schedule.reducer'

export default function ToDoList(){

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const toggleTodo = id => dispatch(toggleTodoAction(id))
    const deleteTodo = id => dispatch(deleteTodoAction(id))

    return (<>
       <h1>스케줄 목록</h1> 
        <div>
            { todos.length === 0 && (<p className='alert alert-info'>등록된 스케줄이 없습니다</p>)}
            { todos.length !== 0 
                    && todos.map(todo => (<div key={todo.id} className="row mb-1">
                                                <div className="col-sm-2">
                                                   <input type="checkbox" 
                                                   checked={todo.completed} 
                                                   onChange={toggleTodo.bind(null, todo.id)}/>
                                                   <span>{todo.name}</span>  
                                                   <button onClick={deleteTodo.bind(null, todo.id)}> X </button>      
                                                </div>
                                                
                                        </div>))}
        </div>
    </>)
}