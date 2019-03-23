import React, { Component, PureComponent } from 'react'
import { DivHeader, DivLogo, Nav, NavItem, Addtion, Button, Search, SearchContainer, SearchInfo, SearchHot, Change, InfoTag } from './style.js'
import { connect } from 'react-redux'
import header from './store'
import { Link } from 'react-router-dom'
import login from '../../pages/login/store'

const { create_search_focus_action, create_search_blur_action, create_getSearchInfo_action, create_mouseenter_action,
  create_mouseleave_action, create_change_action
} = header.actionCreator
const { create_loginOut_action } = login.actionCreator

class Header extends PureComponent {

  render ()  {
    const { focus, mouseIn, tagList, login, handleFocus, handleLogOut, handleBlur, handleMouseEnter, handleMouseLeave, handleChange, currentPage, pageSize, angel} = this.props
    const tageListJs = tagList.toJS(tagList)
    let tags = []
    for (let i = currentPage * 10; i < currentPage * 10 + 10 ; i++) {
      if (i >= tageListJs.length) {
        break;
      }
      tags.push(<InfoTag key={tageListJs[i]}>{tageListJs[i]}</InfoTag>)
    }
    return (
      <DivHeader>
        <Link to='/'>
          <DivLogo />
        </Link>
        <Nav>
          <NavItem className="left active homepage" ><i className="iconfont">&#xe720;</i><span>首页</span></NavItem>
          <NavItem className="left"><i className="iconfont">&#xe622;</i>下载APP</NavItem>
          {
            login ? 
            <Link to="/"><NavItem className="right" onClick={handleLogOut}>退出</NavItem></Link> : 
            <Link to="/login"><NavItem className="right">登陆</NavItem></Link>
          }
          <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
          <SearchContainer>
            <Search 
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={focus ? 'focusInput' : ''}
            />
            <i className={focus ? 'focusIcon iconfont searchIcon' : 'iconfont searchIcon'}>&#xe643;</i>
            {
              (focus || mouseIn) ? <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <SearchHot>
                  热门搜索
                </SearchHot>
                <Change onClick={() => handleChange(this.icon)} angel={angel}>
                  <i className="iconfont rotateIcon" ref={(icon) => { this.icon = icon }}>&#xe851;</i>
                  换一批
                </Change>
                <br />
                <br />
                {
                  tags
                }
              </SearchInfo> : null
            }
  
          </SearchContainer>
        </Nav>
        <Addtion>
          <Link to="/login"><Button className='login'>注册</Button></Link>
          <Link to={`${login ? '/write' : '/login'}`}><Button className='write'><i className="iconfont">&#xe615;</i>写文章</Button></Link>
        </Addtion>
      </DivHeader>
    )
  }
}
const mapStatetoProps = (state) => {
  return {
    focus: state.getIn(['header', 'focus']),
    tagList: state.getIn(['header', 'tagList']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    currentPage: state.getIn(['header', 'currentPage']),
    pageSize: state.getIn(['header', 'pageSize']),
    angel: state.getIn(['header', 'angel']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    handleFocus: () => {
      const action1 = create_getSearchInfo_action()
      const action2 = create_search_focus_action()
      dispatch(action1)
      dispatch(action2)
    },
    handleBlur: () => {
      const action = create_search_blur_action()
      dispatch(action)
    },
    handleMouseEnter: () => {
      const action = create_mouseenter_action()
      dispatch(action)
    },
    handleMouseLeave: () => {
      const action = create_mouseleave_action()
      dispatch(action)
    },
    handleChange: (icon) => {
      const action = create_change_action()
      dispatch(action)
    },
    handleLogOut: () => {
      const action = create_loginOut_action()
      dispatch(action)
    }
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Header)