import axios from 'axios'
import actionType from './actionType.js'
import { fromJS } from 'immutable'

const { LOGIN_IN, LOGIN_OUT, SWAP_LOGIN, SWAP_REGISTER, AT_LOGIN_PATG } = actionType

function create_loginIn_action () {
  return {
    type: LOGIN_IN
  }
}

function create_loginOut_action () {
  return {
    type: LOGIN_OUT
  }
}

function create_swaplogin_action () {
  return {
    type: SWAP_LOGIN,
  }
}

function create_swapregister_action () {
  return {
    type: SWAP_REGISTER,
  }
}

function create_pagestatechange_action () {
  return {
    type: AT_LOGIN_PATG
  }
}
export default {
  create_loginIn_action,
  create_loginOut_action,
  create_swaplogin_action,
  create_swapregister_action,
  create_pagestatechange_action
}