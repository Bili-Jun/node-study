import React, { Component } from 'react';

class Mask extends Component {
  constructor(props) {
    super(props);

    [
      'render',
      '_handleChange',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  _handleChange() {
    this.props.handleChange();
  }

  render() {
    const props = this.props;
    return (
        <div
          className = {`${props.rootClassNamePrefix}-mask ` +
          `${props.className}`}
          style={props.style}
          onClick = {this._handleChange}
        ></div>
    );
  }
}

Mask.propTypes = {
  className: React.PropTypes.string,
  handleChange: React.PropTypes.func,
};

Mask.defaultProps = {
  className: 'mc-mask',
};

export default Mask;
