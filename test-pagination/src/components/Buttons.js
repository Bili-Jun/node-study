import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    const prefix = `${props.rootClassNamePrefix}-btn`;
    let tempClassName = `${prefix}`;
    if (props.pageNumber) {
      tempClassName += ` ${prefix}-${props.pageNumber}`;
    }
    if (props.active) {
      tempClassName += ` ${prefix}-active`;
    }
    if (props.className) {
      tempClassName += ` ${props.className}`;
    }

    return (
      <li title={props.title} className={tempClassName} onClick={props.onClick}>
        <a>{props.btnContent}</a>
      </li>
    );
  }
}

Buttons.propTypes = {
  pageNumber: React.PropTypes.number,
  active: React.PropTypes.bool,
  className: React.PropTypes.string,
};

Buttons.defaultProps = {
  active: false,
};

export default Buttons;
