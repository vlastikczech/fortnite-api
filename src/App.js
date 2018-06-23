import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
  componentDidMount() {
      this.fetchFortnite();
  }

  async fetchFortnite() {
      let platform = 'pc';
      let epicNickname = 'beastlyragee';
      const url = `https://api.fortnitetracker.com/v1/profile/${platform}/${epicNickname}`;
      const response = await fetch(url, {
          method: 'GET',
          mode: 'no-cors',
          headers: {
              'TRN-Api-Key': '74d983c9-c539-4b8a-a64d-8f93f19b1108'
          }
      });
      console.log(response);

      //TRN-Api-Key: 74d983c9-c539-4b8a-a64d-8f93f19b1108
  }
}

export default App;