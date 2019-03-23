import actionType from './actionType'
import axios from 'axios'
import { fromJS } from 'immutable'

const { INIT_DATA } = actionType

function create_save_initData_action(data) {
  return {
    type: INIT_DATA,
    data: fromJS(data)
  }
}

function create_init_data_action(data) {
  const { id } = data
  return (dispatch, getState) => {
    axios.get(`/api/detail.json?id=${id}`).then(res => {
      const action = create_save_initData_action(res.data.data)
      dispatch(action)
    })
  }
}

export default {
  create_init_data_action
}