import React, { Component } from 'react';
import Nav1 from '../src/NAV/nav';
import './NAV/nav.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      signin: false
    }
  }
  render() {
    return (
      <div>
       <Nav1 name={this.state.signin}/>
      </div>
    );
  }
}

export default App;
