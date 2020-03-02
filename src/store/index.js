import {createStore, applyMiddleware} from "redux";

// 引入中间件
import thunkMiddleware from 'redux-thunk'
import {createLogger} from "redux-logger/src";

// 引入reducers
import combineReducers from '../reducers'

const middlewares = {
  thunkMiddleware,
  createLogger
}

export default function configStore() {
  const store = createStore(combineReducers, applyMiddleware(...middlewares))
  return store
}
