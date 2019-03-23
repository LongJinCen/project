import React, { PureComponent, Fragment } from 'react'
import { BackToTop } from './style.js'

class BackToTopComponent extends PureComponent {
  constructor (props) {
    super(props) 
    this.state = {
      showBackTop: false
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const { showBackTop } = this.state
    const top = document.documentElement.scrollTop + document.body.scrollTop
    if (!showBackTop && top > 400) {
      this.setState({
        showBackTop: true
      })
    } else if (showBackTop && top < 400) {
      this.setState({
        showBackTop:false
      })
    }
  }

  handleBackTopClick = () => {
    window.scrollTo(0, 0)
  }

  render () {
    const { showBackTop } = this.state
    return (
      <Fragment>
      {
        showBackTop && <BackToTop onClick={this.handleBackTopClick}><i className="iconfont">&#xe70b;</i></BackToTop>
      }
      </Fragment>
    )
  }
}

export default BackToTopComponent