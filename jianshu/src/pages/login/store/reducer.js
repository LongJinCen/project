import { fromJS, merge, set } from 'immutable'
import actionType from './actionType.js'

const { LOGIN_IN, LOGIN_OUT, SWAP_LOGIN, SWAP_REGISTER, AT_LOGIN_PATG } = actionType
const defaultState = fromJS({
  loginPage: true,
  login: false,
  atLoginPage: false
})

export default (state = defaultState, action) => {
  let newState = null
  switch (action.type) {
    case LOGIN_IN:
      newState = state.set('login', true)
      break;
    case LOGIN_OUT:
      newState = state.set('login', false)
      break;
    case SWAP_LOGIN:
      newState = state.set('loginPage', true)
      break;
    case SWAP_REGISTER:
      newState = state.set('loginPage', false)
      break;
    case AT_LOGIN_PATG:
      const status = state.get('atLoginPage')
      newState = state.set('atLoginPage', !status)
      break;
    default: 
      newState = state
      break;
  }
  return newState
}