import React, { Component } from 'react';
import logo from '../wc_logo.svg';
import Lookup from './Lookup.jsx';
import SubmissionList from './SubmissionList.jsx';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GCPD Citizen Action Interface</h1>
        </header>
        <Lookup />
        <SubmissionList />
      </div>
    );
  }
}

export default App;
