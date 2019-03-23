import axios from 'axios'
import actionType from './actionType.js'
import { fromJS } from 'immutable'

const { INITIAL_DATA, READ_MORE } = actionType

function create_save_data_action (data) {
  return {
    type: INITIAL_DATA,
    data: fromJS(data)
  }
}

function create_getData_action () {
  return (dispatch, getState) => {
    axios.get('/api/home.json').then(res => {
      const action = create_save_data_action(res.data.data)
      dispatch(action)
    })
  }
}

function create_readMore_save_action (data) {
  return {
    type: READ_MORE,
    data: fromJS(data)
  }
}

function create_readMore_action () {
  return (dispatch, getState) => {
    axios.get('/api/readmore.json').then(res => {
      const action = create_readMore_save_action(res.data.data.List)
      dispatch(action)
    })
  }
}
export default {
  create_getData_action,
  create_readMore_action
}