import React, { Component } from 'react';

class ComponentDidMount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 'start',
    };
  }

  componentDidMount() {
    console.log(`[Method] componentDidMount\n[State test] ${this.state.test}`);
    document.getElementById('contentId_3')
           .append(`[Method] componentDidMount\n[State test] ${this.state.test}\n`);
  }

  render() {
    console.log(`[Method] render\n[State test] ${this.state.test}`);
    document.getElementById('contentId_3')
           .append(`[Method] render\n[State test] ${this.state.test}\n`);
    return (
      <div>
        <h3 key={`title0`}>Example 6.2 componentDidMount</h3>
        <br />
        The state is: {this.state.test}
      </div>
    );
  }

}


export default ComponentDidMount;
