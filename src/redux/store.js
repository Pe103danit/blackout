import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import UIStateReducer from './reducers/UIStateReducer/UIStateReducer'
import ProductReducer from './reducers/ProductReducer/ProductReducer'
import SessionReducer from './reducers/SessionReducer/SessionReducer'
const reducers = combineReducers({
  UIStateReducer,
  ProductReducer,
  SessionReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store