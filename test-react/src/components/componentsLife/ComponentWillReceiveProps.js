import React, { Component } from 'react';

class ComponentWillReceiveProps extends Component {
  constructor(props) {
    super(props);

    let test = 'start';

    if ('test'in props) {
      test = props.test;
    }

    this.state = {
      test,
    };

    [
      'render',
      '_handleClick',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  componentWillReceiveProps(nextProps) {
    if ('test' in nextProps) {
      document.getElementById('contentId_7')
           .append(`[Method] componentWillReceiveProps\n[State test] ${this.state.test}\n`);
      this.setState({
        test: nextProps.test,
      });
    }
  }

  _handleClick() {
    document.getElementById('contentId_7')
           .append(`[Method] _handleClick\n[State test] ${this.state.test}\n`);
    this.props._handleClick();
  }

  render() {
    return (
      <div>
        <h3 key={`title0`}>Example 6.6 componentWillReceiveProps</h3>
        <br />
        <button onClick = {this._handleClick}>new props</button>
        <br />
        The state is: {this.state.test}
      </div>
    );
  }
}

ComponentWillReceiveProps.propTypes = {
  test: React.PropTypes.string,
  _handleClick: React.PropTypes.func,
};

ComponentWillReceiveProps.defaultProps = {
  _handleClick: () => (null),
};

export default ComponentWillReceiveProps;
