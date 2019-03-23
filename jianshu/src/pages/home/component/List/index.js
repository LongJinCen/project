import React, { Component, Fragment, PureComponent } from 'react'
import styledComponent from './style.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const { ListItem, ListInfo } = styledComponent
class List extends PureComponent {

  render () {
    const ListArr = this.props.List.map((value, index) => {
      value = value.toJS()
      const { id, title, content, author, comment, love, imgUrl } = value
      return (
        <Link to={`/detail/${id}`}  key={index}>
          <ListItem>
            <ListInfo>
              <h1 className="title">{title}</h1>
              <div className="content">{content}</div>
              <div className="footer">
                <span className="author">{author}</span>
                <span className="comment"><i className="iconfont">&#xe637;</i>{comment}</span>
                <span className="love"><i className="iconfont">&#xe755;</i>{love}</span>
              </div>
            </ListInfo>
            <img className="img" src={imgUrl} alt=""/>
          </ListItem>
        </Link>
      )
    })
    return (
      <Fragment>
        {
          ListArr
        }
      </Fragment>
    )
  }
}

const mapstatetoprops = (state) => {
  return {
    List: state.getIn(['home', 'List'])
  }
}

const mapdispatchtoprops = (dispatch) => {
  return {

  }
}

export default connect(mapstatetoprops, mapdispatchtoprops)(List)