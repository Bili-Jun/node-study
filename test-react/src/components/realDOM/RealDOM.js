import React, { Component } from 'react';

class RealDOM extends Component {
  constructor(props) {
    super(props);

    [
      'render',
      '_handleClick',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  _handleClick() {
    alert(`The content of the real DOM is: \n${this.refs.test.innerHTML}`);
  }

  render() {
    return (
      <div>
        <h3 key={`title0`}>Example 4. Real DOM</h3>
        <h4 key={`title1`} ref={`test`}>This is real DOM </h4>
        <button key={`title2`} onClick={this._handleClick}>button</button>
      </div>
    );
  }
}

export default RealDOM;
