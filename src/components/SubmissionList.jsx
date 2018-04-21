import React, { Component } from 'react';
import SubmissionItem from './SubmissionItem.jsx';
import '../styles/SubmissionList.css';

class SubmissionList extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return (
      <div className="submissionListContainer">
        <h2>Past Submissions</h2>
        <SubmissionItem />
      </div>
    );
  }
}

export default SubmissionList;
