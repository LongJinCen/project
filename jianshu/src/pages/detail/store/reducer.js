import { fromJS, merge } from 'immutable'
import actionType from './actionType'

const { INIT_DATA } = actionType
const defaultState = fromJS({
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  let newState = null
  switch (action.type) {
    case INIT_DATA:
      newState = merge(state, action.data)
      break;
    default:
      newState = state
      break;
    }
    return newState
}