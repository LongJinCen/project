import React, { PureComponent, Fragment } from 'react'
import styledComponent from './style'
import logo from "../../static/logo.png"
import { Link, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import store from './store'

const { Container, Button, SocialAccount, Icons, Center, RegisterButton } = styledComponent
const { actionCreator } = store
const { create_swaplogin_action, create_swapregister_action, create_loginIn_action, create_loginOut_action, create_pagestatechange_action } = actionCreator

class Login extends PureComponent {
  constructor (props) {
    super(props)
    this.phone = React.createRef()
    this.password = React.createRef()
    this.name = React.createRef()
  }
  componentDidMount () {
    this.props.changePageStatus()
  }
  componentWillUnmount () {
    this.props.changePageStatus()
  }
  render () {
    const { swapToLoginPage, swapToRegister, handleLogin, handleRegister, login, loginPage } = this.props
    if (!login) {
      return (
        <Container>
          <Link to="/"><img src={logo} alt=""/></Link>
          <Center>
            <div className="loginAndRegister">
              <span className={`default ${loginPage ? 'active' : '' }`} onClick={swapToLoginPage}>登陆</span>
              <span className={`default ${!loginPage ? 'active' : '' }`} onClick={swapToRegister}>注册</span>
            </div>
            {
              loginPage ? <Fragment>
                <div className="login">
                  <i className="iconfont icon">&#xe654;</i>
                  <input className="input" placeholder="手机号或邮箱" ref={this.phone}/>
                </div>
                <div className="login">
                  <i className="iconfont icon">&#xe6e8;</i>
                  <input className="input" placeholder="密码" type="password" ref={this.password}/>
                </div>
                <div className="remember">
                  <div><input type="checkbox"/>记住我</div>
                  <span className="question">登陆遇到问题?</span>
                </div>
                <Button onClick={() => { handleLogin(this.phone.current, this.password.current)}}>登录</Button>
                <SocialAccount>
                  <hr />
                  <span>社交账号登陆</span>
                  <hr />
                </SocialAccount>
                <Icons>
                  <i className="iconfont otherAccount">&#xe73c;</i>
                  <i className="iconfont otherAccount">&#xe638;</i>
                  <i className="iconfont otherAccount">&#xe626;</i>
                </Icons>
              </Fragment> : <Fragment>
                <div className="login">
                  <i className="iconfont icon">&#xe654;</i>
                  <input className="input" placeholder="你的昵称" ref={this.name}/>
                </div>
                <div className="login">
                  <i className="iconfont icon">&#xe622;</i>
                  <input className="input" placeholder="手机号" ref={this.phone}/>
                </div>
                <div className="login">
                  <i className="iconfont icon">&#xe6e8;</i>
                  <input className="input" placeholder="设置密码" type="password" ref={this.password}/>
                </div>
                <RegisterButton onClick={() => { handleRegister(this.name.current, this.phone.current, this.password.current)}} >注册</RegisterButton>
                <div className="registerDeclare">点击 “注册” 即表示您同意并愿意遵守简书 <a href="##">用户协议</a> 和 <a href="##">隐私政策</a> 。</div>
                <SocialAccount>
                  <hr />
                  <span>社交账号直接注册</span>
                  <hr />
                </SocialAccount>
                <Icons>
                  <i className="iconfont otherAccount">&#xe638;</i>
                  <i className="iconfont otherAccount">&#xe626;</i>
                </Icons>
              </Fragment>
            }
  
          </Center>
        </Container>
      )
    } else {
      return (
        <Redirect to="/"/>
      )
    }
  }
}

const mapstatetoprops = (state) => {
  const login = state.get('login')
  return {
    login: login.get('login'),
    loginPage: login.get('loginPage'),
  }
}

const mapdispatchtoprops = (dispatch) => {
  return {
    swapToLoginPage: () => {
      const action = create_swaplogin_action()
      dispatch(action)
    },
    swapToRegister: () => {
      const action = create_swapregister_action()
      dispatch(action)
    },
    handleLogin: (phone, password) => {
      const action = create_loginIn_action()
      dispatch(action)
    },
    handleRegister: (name, phone, password) => {
      const action = create_loginOut_action()
      dispatch(action)
    },
    changePageStatus: () => {
      const action = create_pagestatechange_action()
      dispatch(action)
    }
  }
}
export default connect(mapstatetoprops, mapdispatchtoprops)(withRouter(Login))