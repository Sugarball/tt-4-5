import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      msgList: [
        {
          msg: 'hello, it\'s me',
        },
        {
          msg: 'i was wondering if after all these years you\'d like to meet',
        }
      ],
      inputMsg: '',
    }
  }

  handlePost(e) {
    e.preventDefault()
    const { inputMsg, msgList } = this.state
    let _msgList = [...msgList]

    if (!inputMsg) return

    _msgList.push({msg: inputMsg})
    this.setState({
      msgList: _msgList,
      inputMsg: '',
    })
    
  }

  render() {
    const { inputMsg, msgList } = this.state
    
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
    );
  }
}

export default App;
