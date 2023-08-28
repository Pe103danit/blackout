import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import UIStateReducer from './reducers/UIStateReducer/UIStateReducer'
import ProductReducer from './reducers/ProductReducer/ProductReducer'
const reducers = combineReducers({
  UIStateReducer,
  ProductReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store