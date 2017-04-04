import React, { Component } from 'react';

class PropTypes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return (
      <div>
        <h3 key={`title0`}>Example 3.1 PropTypes</h3>
        <h4 key={`title2`} className = {props.className}>The className is:{props.className}</h4>
        The test props is {props.test}
        <br key={`br`} />
        The num props is {props.num}
        <ul key={`content`}>
          {
            React.Children.map(props.children, (child, i) => (<li key={i}>{child}</li>))
          }
        </ul>
      </div>
    );
  }
}

PropTypes.PropTypes = {
  test: React.PropTypes.string,
  num: React.PropTypes.number,
};

PropTypes.defaultProps = {
  test: 'test',
  num: 1,
};

export default PropTypes;
