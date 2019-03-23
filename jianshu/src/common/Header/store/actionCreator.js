import type from './actionType'
import { fromJS } from 'immutable'
import axios from 'axios'

const { search_focus, search_blur, save_searchInfo, mouse_enter, mouse_leave, searchInfo_change } = type

function create_search_focus_action () {
  return {
    type: search_focus
  }
}

function create_search_blur_action () {
  return {
    type: search_blur
  }
}

function create_save_searchInfo_action (data) {
  return {
    type: save_searchInfo,
    data: fromJS(data)
  }
}

function create_getSearchInfo_action () {
  return (dispatch, getState) => {
    const tagList = getState().getIn(['header', 'tagList'])
    if (tagList.size > 0) {
      return 
    }
    axios.get('/api/searchInfo.json').then((res) => {
      const action = create_save_searchInfo_action({
        tagList: res.data.data,
        totalTags: res.data.data.length
      })
      dispatch(action)
    })
  }
}

function create_mouseenter_action () {
  return {
    type: mouse_enter
  }
}

function create_mouseleave_action () {
  return {
    type: mouse_leave
  }
}

function create_change_action () {
  return {
    type: searchInfo_change
  }
}
export default {
  create_search_focus_action,
  create_search_blur_action,
  create_getSearchInfo_action,
  create_mouseenter_action,
  create_mouseleave_action,
  create_change_action
}