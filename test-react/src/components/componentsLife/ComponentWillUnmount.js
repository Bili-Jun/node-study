import React, { Component } from 'react';

class ComponentWillUnmount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 'start',
    };
  }

  componentWillUnmount() {
    console.log(`[Method] componentWillUnmount\n The component is removed!`);
    document.getElementById('contentId_6')
           .append(`[Method] componentWillUnmount\n The component is removed!`);
  }

  render() {
    console.log(`[Method] render\n The component is rendered!`);
    document.getElementById('contentId_6')
           .append(`[Method] render\n The component is rendered!\n`);
    return (
      <div>
        <h3 key={`title0`}>Example 6.5 componentWillUnmount</h3>
        <br />
        Render this component,state:{this.state.test}
        <br />
      </div>
    );
  }
}

export default ComponentWillUnmount;
