import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{

  constructor(props) {
    super(props);
    // Don't do this!
    this.state = 'text';
  }

  componentDidMount() {
    this.nv.addEventListener("login", () => {console.log('things and stuff');});
  }

  componentWillUnmount() {
    this.nv.removeEventListener("login", () => {console.log('things and stuff');});
  }
  render () { 
    return  (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <lib-components  ref={elem => this.nv = elem} header={this.state}></lib-components>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
