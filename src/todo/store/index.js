import {createStore} from 'redux'
import scheduleReducer from './schedule.reducer'

const store = createStore(scheduleReducer)

export default store