import React, { PureComponent } from 'react'
import Header from './common/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import pages from './pages'
import { connect } from 'react-redux'

const { Detail, Home, Login } = pages

class App extends PureComponent {
  render () {
    const { atLoginPage } = this.props
    return (
      <BrowserRouter>
        <div>
          {
            !atLoginPage && <Header />
          }
          <Route path='/' exact component={Home} />
          <Route path='/detail/:id' exact component={Detail} />
          <Route path='/login' exact component={Login} />
        </div>
      </BrowserRouter>
    )
  }
}

const mapstatstoprops = (state) => {
  return {
    atLoginPage: state.getIn(['login', 'atLoginPage'])
  }
}

export default connect(mapstatstoprops)(App)