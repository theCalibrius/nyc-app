import React, { Component } from 'react';
import SubmissionItem from './components/SubmissionItem.jsx';
import '../styles/SubmissionList.css';

class SubmissionList extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return (
      <h2>Past Submissions</h2>
      <SubmissionItem />
    );
  }
}

export default SubmissionList;
