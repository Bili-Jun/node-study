import React from 'react';
import ReactDom from 'react-dom';
import Pagination from './components/Pagination';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 2,
    };

    [
      'render',
      'onChange',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onChange(page) {
    this.setState({
      current: page,
    });
  }

  render() {
    return (<Pagination
      onChange={this.onChange}
      // current={this.state.current}
      total={999}
      displayLength={5}
    />);
  }
}

ReactDom.render(
  <Test />,
  document.getElementById('example')
);
/* ReactDom.render(<Pagination
  pageSize={10} total={999}
  displayLength={5} // current={2}
/>, document.getElementById('example'));*/
// document.write('Hello world!11a');
