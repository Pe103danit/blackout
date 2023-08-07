import { combineReducers, createStore } from 'redux'
import UIStateReducer from './reducers/UIStateReducer/UIStateReducer'

const reducers = combineReducers({
  UIStateReducer: UIStateReducer
})

const store = createStore(reducers)

export default store