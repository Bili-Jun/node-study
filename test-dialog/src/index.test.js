import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Dialog from './components/Dialog';

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    [
      'render',
      'handleOpen',
      'handleClose',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  handleOpen() {
    this.setState({
      show: true,
    });
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpen}>Open Dialog</button>
        <Dialog show = {this.state.show} handleClose={this.handleClose}/>
      </div>
    );
  }
}

ReactDom.render(
   <Test/>,
document.getElementById('example'));
