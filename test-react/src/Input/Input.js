import React, {Component} from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Hello!'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    const value = this.state.value;
    console.log(this.state);
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <p>{value}</p>
      </div>
    );
  }
}

export default Input;
