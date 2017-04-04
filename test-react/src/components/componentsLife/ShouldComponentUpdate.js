import React, { Component } from 'react';

class ShouldComponentUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 'start',
    };

    [
      'render',
      '_handleClick',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  shouldComponentUpdate(nextprops, nextstate) {
    console.log(`[Method] shouldComponentUpdate\n[State test] ${nextstate.test}`);
    document.getElementById('contentId_8')
           .append(`[Method] shouldComponentUpdate\n[State test] ${this.state.test}\n`);
    return false;
  }

  _handleClick() {
    console.log(`[Method] _handleClick \n[State test] ${this.state.test}`);
    document.getElementById('contentId_8')
           .append(`[Method] _handleClick\n[State test] ${this.state.test}\n`);
    this.setState({
      test: 'end',
    }, () => {
      console.log(`[Method] _handleClick callback \n[State test] ${this.state.test}`);
      document.getElementById('contentId_8')
           .append(`[Method] _handleClick callback \n[State test] ${this.state.test}\n`);
    });
  }

  render() {
    console.log(`[Method] render\n[State test] ${this.state.test}`);
    document.getElementById('contentId_8')
           .append(`[Method] render \n[State test] ${this.state.test}\n`);
    return (
      <div>
        <h3 key={`title0`}>Example 6.7 shouldComponentUpdate</h3>
        <br />
        Render this component,state:{this.state.test}
        <br />
        <button key={`title1`} onClick={this._handleClick}>updateComponent</button>
      </div>
    );
  }
}

export default ShouldComponentUpdate;
