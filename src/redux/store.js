import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import UIStateReducer from './reducers/UIStateReducer/UIStateReducer'
import ProductReducer from './reducers/ProductReducer/ProductReducer'
import SessionReducer from './reducers/SessionReducer/SessionReducer'
const reducers = combineReducers({
  UIStateReducer,
  ProductReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store