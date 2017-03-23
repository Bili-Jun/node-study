import React from 'react';

class Select extends React.Component {
  constructor(props) {
    super(props);

    [
      'render',
      '_changeSize',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  _changeSize(event) {
    const value = event.target.value;
    this.props.changeSize(Number(value));
  }

  render() {
    const props = this.props;
    const pageSize = props.pageSize || props.selectOptionsPageSize[0];
    const options = props.selectOptionsPageSize.map((o, i) => (
      <option key={i} value={o}>{o}</option>
    ));
    return (
      <select
        onChange={this._changeSize}
      >
        {options}
      </select>
    );
  }
}

Select.propTypes = {
  pageSize: React.PropTypes.number,
  changeSize: React.PropTypes.func,
  selectOptionsPageSize: React.PropTypes.arrayOf(React.PropTypes.number),
};

Select.defaultProps = {
  selectOptionsPageSize: [10, 20, 30, 40, 50],
};

export default Select;
