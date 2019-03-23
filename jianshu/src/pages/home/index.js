import React, { Fragment, PureComponent } from 'react'
import styledComponent from './style.js'
import homeComponent from './component'
import store from './store'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import BackToTopComponent from '../../common/BackToTop'

const { create_getData_action, create_readMore_action } = store.actionCreator
const { List, Recommon, Toptic } = homeComponent
const { Container, LeftContainer, RightContainer, ReadMore } = styledComponent
class Home extends PureComponent {
  componentDidMount() {
    const action = create_getData_action()
    this.props.intialData(action)
  }
  render () {
    return (
      <Container>
        <LeftContainer>
          <img className="img" src='//upload.jianshu.io/admin_banners/web_images/4552/532152a690ad5a98d1c22eb48a316ca7ff428970.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt="cacasc"/>
          <div className="hr"/>
          <List />
          <ReadMore onClick={this.props.readMore}>阅读更多</ReadMore>
        </LeftContainer>
        <RightContainer>
          <Toptic />
          <Recommon />
        </RightContainer>
        <BackToTopComponent />
      </Container>
    )
  }
}
const mapstatetoprops = (state) =>{
  return {
    
  }
}
const mapdispatchtoprops = (dispatch) => {
  return {
    intialData: (action) => {
      dispatch(action)
    },
    readMore: () => {
      const action = create_readMore_action()
      dispatch(action)
    }
  } 
}
export default connect(mapstatetoprops, mapdispatchtoprops)(withRouter(Home))