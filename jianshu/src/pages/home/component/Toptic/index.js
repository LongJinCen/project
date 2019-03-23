import React, { Component, Fragment, PureComponent } from 'react'
import { connect } from 'react-redux'
import styledComponent from './style.js'

const { TopicItem } = styledComponent

class Toptic extends PureComponent {

  render () {
    const { topicList } = this.props
    const topics = topicList.map(value => {
      return <TopicItem src={value} key={value}/>
    })
    return (
      <Fragment>
        {
          topics
        }
      </Fragment>
    )
  }
}

const mapstatetoprops = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList'])
  }
}

const mapdispatchtoprops = (dispatch) => {
  return {

  }
}

export default connect(mapstatetoprops, mapdispatchtoprops)(Toptic)