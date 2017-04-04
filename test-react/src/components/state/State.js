import React, { Component } from 'react';

class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
    };

    [
      'render',
      '_handleClick',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  _handleClick() {
    let state = '';
    if (this.state.text === 'start') {
      state = 'end';
    } else {
      state = 'start';
    }

    this.setState({
      text: state,
    }, () => {
      console.log(this.state.text);
      document.getElementById('contentId').append(`${this.state.text}\n`);
    });
  }

  render() {
    const _state = this.state;
    return (
      <div>
        <h3 key={`title0`}>Example 5. State</h3>
        <br key={`title1`}/>
        The state is: {_state.text}
        <br key={`title2`} />
        <button key={`title3`} onClick = {this._handleClick}>button</button>
      </div>
    );
  }
}

State.propTypes = {
  text: React.PropTypes.string,
};

State.defaultProps = {
  text: 'start',
};

export default State;
