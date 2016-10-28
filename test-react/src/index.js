// export HelloWorld from './HelloWorld';
import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './HelloWorld/index';
import CommentBox from './CommentBox/index';
import NodeList from './NodeList/index';
import Input from './Input/index';

ReactDom.render(<HelloWorld phrase="ES6" />, document.getElementById('example'));
ReactDom.render(<CommentBox />, document.getElementById('content'));
ReactDom.render(
  <NodeList>
    <span>hello</span>
    <span>world</span>
  </NodeList>,
  document.getElementById('nodeList')
);
ReactDom.render(<Input />, document.getElementById('testInput'));
