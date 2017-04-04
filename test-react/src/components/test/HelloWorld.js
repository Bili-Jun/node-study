import React, { Component } from 'react';

class HelloWorld extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <h3 key={`title0`}>Example 1. Hello world</h3>
        <h4 key={`title1`}>Hello World!</h4>
      </div>
    );
  }
}

export default HelloWorld;
