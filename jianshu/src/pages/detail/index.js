import React, { Component, Fragment, PureComponent } from 'react'
import detailStore from './store'
import { connect } from 'react-redux'
import styledComponent from './style'
import { withRouter } from 'react-router-dom'
import BackToTopComponent from '../../common/BackToTop'

const { actionCreator } = detailStore
const { create_init_data_action } = actionCreator
const { Container } = styledComponent
class Detail extends PureComponent { 

  componentDidMount () {
    const { match, initData } = this.props
    initData({ id: match.params.id })
  }
  render () {
    const { title, content } = this.props
    return (
      <Container>
        <h1 className="title">{title}</h1>
        <div className="content" dangerouslySetInnerHTML={{__html: content}} />
        <BackToTopComponent />
      </Container>
    )
  }
}

const mapstatetoprops = (state) => {
  const detail = state.get('detail')
  return {
    title: detail.get('title'),
    content: detail.get('content')
  }
}

const mapdispatchtoprops = (dispatch) => {
  return {
    initData: (data) => {
      const action = create_init_data_action(data)
      dispatch(action)
    }
  }
}
export default connect(mapstatetoprops, mapdispatchtoprops)(withRouter(Detail))