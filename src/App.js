import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Websocket from 'react-websocket';

class App extends Component {

  handleData(data) {

	// log data to console
	console.log(data);

  // Found how to parse blobs on stackoverflow: https://stackoverflow.com/questions/15341912/how-to-go-from-blob-to-arraybuffer
  var arrayBuffer;
  var fileReader = new FileReader();
  fileReader.onload = function() {
      arrayBuffer = this.result;
  };
  fileReader.readAsArrayBuffer(data);
  console.log(fileReader.result);

  }
  render() {
    return (
      <div className="App">
	  	<Websocket url="ws://localhost:5000/random?count=50&delay=5"
			onMessage={this.handleData.bind(this)} />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
