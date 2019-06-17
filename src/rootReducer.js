import { combineReducers } from 'redux'
import todos from './reducers'
import visibilityFilter from './visibilityFilters'

export default combineReducers({
  todos,
  visibilityFilter
})

//define reducers and actions for redux store