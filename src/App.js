import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
var Wilddog = require("wilddog")
import logo from './logo.svg'
import './App.css'

import * as actionCreators from './actions/chat'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputMsg: '',
    }
    this.ref = null
  }

  componentDidMount() {
    this.ref = new Wilddog("https://tt-4-5.wilddogio.com/")
    this.ref.on('value', msgs => {
      console.log('msgs', msgs.val())
      this.props.initMsg(msgs.val())
    })
  }

  handlePost(e) {
    e.preventDefault()
    const { inputMsg } = this.state
    if (!inputMsg) return

    this.setState({
      inputMsg: '',
    })
    this.ref.child('msgs').push({
      msg: inputMsg
    })
  }

  render() {
    const { inputMsg } = this.state
    const { msgList } = this.props
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ilabs tech talk</h2>
        </div>

        <form className="input-sec" onSubmit={this.handlePost.bind(this)}>
          <input type="text" value={inputMsg} onChange={e => this.setState({inputMsg: e.target.value})} />
          <button className="post-btn" type="submit" onClick={this.handlePost.bind(this)}>
            send
          </button>
        </form>

        <div className="msg-sec">
          {
            [...msgList].reverse().map((msg, index) => (
              <div className="msg-content" key={index}>
                {msg.msg}
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default connect(
  state => state.chat,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(App)
