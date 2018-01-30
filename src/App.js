import React, { Component } from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';
import tutorialStart, { sendMessage, connectToServer } from './tutorial/MyApp';
import { getLogs } from './tutorial/MyConsole';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: getLogs(),
      username: '',
      message: '',
      messages: []
    };
    // this.updateData = this.updateData.bind();
  }
  updateData(messages) {
    console.log(messages);
    this.setState({ messages });
  }
  renderMessage(username, message) {
    return (
      <div>
        <span style={{ color: 'green' }}>{username}:</span> {message}
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-col">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <button
              onClick={() => {
                connectToServer(this.updateData.bind(this));
              }}
            >
              Connect
            </button>
          </div>
          <div className="App-col Col-right">
            <div>
              Username:{' '}
              <input
                onChange={event => {
                  this.setState({ username: event.target.value });
                }}
              />
            </div>
            <div>
              Message:{' '}
              <input
                onChange={event => {
                  this.setState({ message: event.target.value });
                }}
              />
            </div>
            <div>
              <button
                onClick={() => {
                  sendMessage(this.state.username, this.state.message);
                }}
              >
                Send
              </button>
            </div>
          </div>
        </header>
        <button
          onClick={() => {
            tutorialStart();
            this.setState({ log: getLogs() });
            this.intro.scrollTop = this.intro.scrollHeight;
          }}
        >
          {' '}
          Reload{' '}
        </button>
        <div className="App-intro" ref={ref => (this.intro = ref)}>
          {_.map(this.state.messages, msg =>
            this.renderMessage(msg.username, msg.message)
          )}
        </div>
      </div>
    );
  }
}

export default App;
