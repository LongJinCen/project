import type from './actionType'
import { fromJS, merge } from 'immutable'

const { search_focus, search_blur, save_searchInfo, mouse_enter, mouse_leave, searchInfo_change } = type
const defaultState = fromJS({
  focus: false,
  mouseIn: false,
  tagList: [],
  currentPage: 0,
  pageSize: 10,
  totalTags: 0,
  angel: 0
})

export default (state = defaultState, action) => {
  let newState = null
  switch(action.type) {
    case search_focus:
      newState = state.set('focus', true)
      break;
    case search_blur:
      newState = state.set('focus', false)
      break;
    case save_searchInfo:
      newState = merge(state, action.data)
      break;
    case mouse_enter:
      newState = merge(state, {
        mouseIn: true
      })
      break;
    case mouse_leave:
      newState = merge(state, {
        mouseIn: false
      })
      break;
    case searchInfo_change:
      const data = searchInfoChange(state)
      newState = merge(state, data)
      break;
    default:
      newState = state
      break;
  }
  return newState
}

function searchInfoChange(state) {
  const currentPage = state.get('currentPage')
  const pageSize = state.get('pageSize')
  const totalTags = state.get('totalTags')
  const angel = state.get('angel')
  let totoalPage = undefined
  if (totalTags % pageSize > 0) {
    totoalPage = Math.floor(totalTags / pageSize) + 1
  } else {
    totoalPage = Math.floor(totalTags / pageSize)
  }
  const nextPage = (currentPage + 1) % totoalPage
  return {
    currentPage: nextPage,
    angel: angel + 360
  }
}