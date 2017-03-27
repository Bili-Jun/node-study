import React, { Component } from 'react';

class DialogChild extends Component {
  constructor(props) {
    super(props);

    [
      'render',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  render() {
    const props = this.props;
    const preFix = `${props.rootClassNamePrefix}-child`;
    const children = (('children' in props) && props.children !== undefined) ? 
      (React.Children.map(props.children, (child) =>
        React.cloneElement(child))) :
      (<div className={`${preFix}-content mc-content`}>
        <h3>{props.title}</h3>
          <p>{props.content}</p>
          <div className={`${preFix}-foot mc-foot`}>
            <button className={`${preFix}-btn mc-btn close`}
              onClick={props.handleChange}
            >
              OK
            </button>
          </div>
        </div>);
    return (
      <div
        className = {`${preFix} ${('className' in props) ? props.className : ''} `}
        style={props.style}
      >
        {
          children
        }
      </div>
    );
  }
}

DialogChild.propTypes = {
  className: React.PropTypes.string,
  handleChange: React.PropTypes.func,
  content: React.PropTypes.string,
  title: React.PropTypes.string,
};

DialogChild.defaultProps = {
  content: 'Title',
  title: 'This is content',
};

export default DialogChild;
