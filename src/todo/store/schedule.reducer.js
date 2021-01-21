export const addTodoAction = todo => ({type: "ADD_TODO", payload: todo})
export const toggleTodoAction = todoId => ({type: "TOGGLE_TODO", payload: todoId})
export const deleteTodoAction = todoId => ({type: "DELETE_TODO", payload: todoId})
const initialState = {todos: [], todo:{}}
export default function scheduleReducer(state=initialState, action){
    switch (action.type){
        case "ADD_TODO": return {...state, todos: [...state.todos, action.payload]}
        case "TOGGLE_TODO": return {...state, 
        todos: state.todos.map(todo => todo.todoId === action.payload 
            ? {...todo, complete: !todo.complete}: todo)}
        case "DELETE_TODO": return {...state, 
        todos: state.todos.filter(todo => todo.todoId !== action.payload)}
        default: return state
    }
}

 