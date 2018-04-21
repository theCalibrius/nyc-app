import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Lookup.css';


class Lookup extends Component {
  constructor() {
    super();
    this.state = {
      selectedImage: null
    }
  }
  
  handleSelectFile = (event) => {
    console.log(event.target.files[0]);
    console.log(event.target.files[0].name);
    this.setState({
      selectedImage: event.target.files[0]
    })
  }

  handleFileUpload = () => {
    if (this.state.selectedImage) {
      const data = new FormData();
      const API_KEY = 'api_key=ioPi-CX1OzLbZEYMaqpyLQ'
      data.append('image', this.state.selectedImage, this.state.selectedImage.name);
      axios.post('https://www.headlightlabs.com/api/gcpd_lookup?' + API_KEY, data)
        .then((res) => {
          console.log(res);
        });
    } else {
      alert('First select an image');
    }
  }

  handleReport = () => {
    if (this.state.selectedImage) {
      const data = new FormData();
      const API_KEY = 'api_key=ioPi-CX1OzLbZEYMaqpyLQ'
      data.append('image', this.state.selectedImage, this.state.selectedImage.name);
      axios.post('https://www.headlightlabs.com/api/gcpd_report?' + API_KEY, data)
        .then((res) => {
          console.log(res);
        });
    } else {
      alert('First select an image');
    }
  }

  render() {

    return (
      <div className="lookupContainer">
        <h2>Lookup</h2>
        <input type="file" onChange={this.handleSelectFile} />
        <button onClick={this.handleFileUpload}>Submit</button>
        <button onClick={this.handleReport}>Report</button>
      </div>
    );
  }
}

export default Lookup;
