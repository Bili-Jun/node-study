import React, { Component } from 'react';

class ComponentWillMount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 'start',
    };
  }
 componentWillMount() {
   console.log(`[Method] componentWillMount\n[State test] ${this.state.test}`);
   document.getElementById('contentId_2')
           .append(`[Method] componentWillMount\n[State test] ${this.state.test}\n`);
   this.setState({
     test: 'end',
   });
 }
  render() {
    console.log(`[Method] render\n[State test] ${this.state.test}`);
    document.getElementById('contentId_2')
            .append(`[Method] render\n[State test] ${this.state.test}`);
    return (
      <div>
        <h3 key={`title0`}>Example 6.1 componentWillMount</h3>
        <br />
        Render this component,state:{this.state.test}
      </div>
    );
  }
}

export default ComponentWillMount;
