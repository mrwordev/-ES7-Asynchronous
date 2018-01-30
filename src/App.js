import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import tutorialStart from './tutorial/MyApp';
import { getLogs } from './tutorial/MyConsole';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: getLogs()
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
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
          {getLogs().map(log => log)}
        </div>
      </div>
    );
  }
}

export default App;
