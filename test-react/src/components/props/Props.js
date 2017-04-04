import React, { Component } from 'react';

class Props extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return (
      <div>
        <h3 key={`title0`}>Example 3. Props</h3>
        <h4 key={`title1`} className = {props.className}>The className is:{props.className}</h4>
        <ul key={`content`}>
          {
            React.Children.map(props.children, (child, i) => (<li key={i}>{child}</li>))
          }
        </ul>
      </div>
    );
  }
}

export default Props;
