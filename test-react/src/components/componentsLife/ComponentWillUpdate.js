import React, { Component } from 'react';

class ComponentWillUpdate extends Component {
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

  componentWillUpdate() {
    console.log(`[Method] componentWillUpdate\n[State test] ${this.state.test}`);
    document.getElementById('contentId_4')
           .append(`[Method] componentWillUpdate\n[State test] ${this.state.test}\n`);
  }

  _handleClick() {
    console.log(`[Method] _handleClick \n[State test] ${this.state.test}`);
    document.getElementById('contentId_4')
           .append(`[Method] _handleClick\n[State test] ${this.state.test}\n`);
    this.setState({
      test: 'end',
    }, () => {
      console.log(`[Method] _handleClick callback \n[State test] ${this.state.test}`);
      document.getElementById('contentId_4')
           .append(`[Method] _handleClick callback\n[State test] ${this.state.test}\n`);
    });
  }

  render() {
    console.log(`[Method] render\n[State test] ${this.state.test}`);
    document.getElementById('contentId_4')
           .append(`[Method] render\n[State test] ${this.state.test}\n`);
    return (
      <div>
        <h3 key={`title0`}>Example 6.3 componentWillUpdate</h3>
        <br />
        Render this component,state:{this.state.test}
        <br />
        <button key={`title1`} onClick={this._handleClick}>updateComponent</button>
      </div>
    );
  }
}

export default ComponentWillUpdate;
