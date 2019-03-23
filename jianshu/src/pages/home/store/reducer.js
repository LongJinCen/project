import { fromJS, merge, set } from 'immutable'
import actionType from './actionType.js'

const { INITIAL_DATA, READ_MORE } = actionType
const defaultState = fromJS({
  List: [],
  topicList: [],
  recommon:[]
})

export default (state = defaultState, action) => {
  let newState = null
  switch (action.type) {
    case INITIAL_DATA:
      newState = merge(state, action.data)
      break;
    case READ_MORE:
      newState = state.set('List', state.get('List').concat(action.data))
      break;
    default: 
      newState = state
      break;
  }
  return newState
}