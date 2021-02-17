import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{

  constructor(props) {
    super(props);
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
          <ihsm-login ref={elem => this.nv = elem} header={this.state}></ihsm-login>
        </header>
      </div>
    );
  }
}


export default App;
