import React, { Component } from 'react';
import '../src/style/common.less'

// import './App.css';

import './test.less'

class App extends Component {
  render() {
    return (
      <div className="App">
          {this.props.children}
      </div>
    );
  }
}

export default App;
