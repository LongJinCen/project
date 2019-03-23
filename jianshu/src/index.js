import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import GlobalStyle from './style.js'
import GlobalIncon from './static/iconfont/iconfont.js'
import { Provider } from 'react-redux'
import store from './store'

ReactDom.render(
  <Provider store={store}>
    <div>
      <GlobalIncon />
      <GlobalStyle />
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)