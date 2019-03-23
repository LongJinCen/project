import React, { Component, Fragment, PureComponent } from 'react'
import styledComponent from './style.js'
import { connect } from 'react-redux'

const { Container, Item } = styledComponent

class Recommon extends PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      pageSize: 5,
      currentPage: 0,
      totalSize: 0,
      pages: 0
    }
  }

  static getDerivedStateFromProps (props, state) {
    const totalSize = props.recommon.length

    const { pageSize } = state
    return {
      totalSize: totalSize,
      pages: Math.ceil(totalSize/pageSize)
    }
  }

  handleChangeClick = () => {
    const { currentPage, pages } = this.state
    const nextPage = (currentPage + 1) % pages
    this.setState({
      currentPage: nextPage
    })
  }
  render () {
    const { recommon } = this.props
    const { pageSize, currentPage, totalSize } = this.state
    const recommonList = []
    for( let i = pageSize * currentPage; i < pageSize * currentPage + 5; i++ ) {
      if (i >= totalSize) {
        break;
      }
      const { id, photoUrl, name, writeNumber, love } = recommon[i]
      const item = (
        <Item key={id}>
          <img className="photo" src={photoUrl} alt=""/>
          <div className="nameAndFocus">
            <span className="name">{name}</span>
            <span className="focus">+关注</span>
          </div>
          <div className="data">写了{writeNumber}k字 · {love}喜欢</div>
        </Item>
      )
      recommonList.push(item)
    }
    return (
      <Container>
        <div className="head">
          <span>推荐作者</span>
          <span className="change" onClick={this.handleChangeClick}><i className="iconfont ">&#xe851;</i>换一批</span>
        </div>
        {
          recommonList
        }
      </Container>
    )
  }
}

const mapstatetoprops = (state) => {
  return {
    recommon: state.getIn(['home', 'recommon']).toJS()
  }
}

const mapdispatchtoprops = (dispatch) => {
  return {

  }
}
export default connect(mapstatetoprops, mapdispatchtoprops)(Recommon)