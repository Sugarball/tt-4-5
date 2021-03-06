import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'

import store from './store'
const _store = store()

ReactDOM.render(
  <Provider store={_store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
