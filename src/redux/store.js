import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import UIStateReducer from './reducers/UIStateReducer/UIStateReducer'
import productReducer from './reducers/ProductReducer/productReducer'
const reducers = combineReducers({
  UIStateReducer,
  products: productReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store