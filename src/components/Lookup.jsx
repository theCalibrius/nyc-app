import React, { Component } from 'react';
import axios from 'axios';
import './styles/Lookup.css';

class Lookup extends Component {
  constructor() {
    super();
    this.state = {
      uploadedImage: null
    }
  }


  render() {
    return (
      <h2>Lookup</h2>
    );
  }
}

export default Lookup;
