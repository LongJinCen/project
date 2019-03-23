import { createStore, applyMiddleware, compose  } from 'redux'
import ReduxThunk from 'redux-thunk'
import { combineReducers } from 'redux-immutable'
import header from "../common/Header/store"
import home from '../pages/home/store'
import detail from '../pages/detail/store'
import login from '../pages/login/store'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(applyMiddleware(ReduxThunk))
const store = createStore(combineReducers({
  header: header.reducer,
  home: home.reducer,
  detail: detail.reducer,
  login: login.reducer
}), enhancer)

export default store