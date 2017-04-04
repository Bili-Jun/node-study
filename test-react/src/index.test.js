import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/test/HelloWorld';
import JSX from './components/jsx/JSX';
import Props from './components/props/Props';
import PropTypes from './components/props/PropTypes';
import RealDOM from './components/realDOM/RealDOM';
import State from './components/state/State';
import ComponentWillMount from './components/componentsLife/ComponentWillMount';
import ComponentDidMount from './components/componentsLife/ComponentDidMount';
import ComponentWillUpdate from './components/componentsLife/ComponentWillUpdate';
import ComponentDidUpdate from './components/componentsLife/ComponentDidUpdate';
import ComponentWillUnmount from './components/componentsLife/ComponentWillUnmount';
import ComponentWillReceiveProps from './components/componentsLife/ComponentWillReceiveProps';
import ShouldComponentUpdate from './components/componentsLife/ShouldComponentUpdate';

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('example1')
);

ReactDOM.render(
  <JSX />,
  document.getElementById('example2')
);

ReactDOM.render(
  <Props className = {'test'}>
    <li key={0}>test1</li>
    <li key={1}>test2</li>
    <li key={2}>test3</li>
    <li key={3}>test4</li>
  </Props>,
  document.getElementById('example3')
);


ReactDOM.render(
  <PropTypes className = {'test'} num={2} />,
  document.getElementById('example3_1')
);

ReactDOM.render(
  <RealDOM />,
  document.getElementById('example4')
);

ReactDOM.render(
  <State />,
  document.getElementById('example5')
);

ReactDOM.render(
  <ComponentWillMount />,
  document.getElementById('example6_1')
);

ReactDOM.render(
  <ComponentDidMount />,
  document.getElementById('example6_2')
);

ReactDOM.render(
  <ComponentWillUpdate />,
  document.getElementById('example6_3')
);

ReactDOM.render(
  <ComponentDidUpdate />,
  document.getElementById('example6_4')
);

ReactDOM.render(
  <ComponentWillUnmount />,
  document.getElementById('example6_5')
);

ReactDOM.unmountComponentAtNode(document.getElementById('example6_5'));


class Test extends Component {

  constructor(props) {
    super(props);

    this.state = {
      test: 'start',
    };

    [
      'render',
      'handleClick',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  handleClick() {
    this.setState({
      test: 'end',
    });
  }

  render() {
    return (
      <ComponentWillReceiveProps test = {this.state.test} _handleClick = {this.handleClick} />
    );
  }
}

ReactDOM.render(
  <Test />,
  document.getElementById('example6_6')
);

ReactDOM.render(
  <ShouldComponentUpdate />,
  document.getElementById('example6_7')
);
