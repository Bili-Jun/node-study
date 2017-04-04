import React, { Component } from 'react';

class JSX extends Component {
  render() {
    const value = 'This is a js value';
    const array = [1, 2, 3, 4];
    const arrDOM = [
      <h4 key={`title1`}>Hello JSX!</h4>,
      <h5 key={`title2`}>React is awesome</h5>,
    ];
    return (
      <div>
      <h3 key={`title0`}>Example 2. JSX</h3>
        <h2 key={`title3`}>Hello World!</h2>
        <p key={`p`}>This is about react JSX </p>
        value:{value}
        <p key={`content`}>This is a number array: {`[${array.join(',')}]`}</p>
        <br key={`br`}/>
        This is DOM array:
        {arrDOM}
      </div>
    );
  }
}

export default JSX;
