// export HelloWorld from './HelloWorld';
import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './HelloWorld/index';
import CommentBox from './CommentBox/index';


ReactDom.render(<HelloWorld phrase="ES6" />, document.getElementById('example'));
ReactDom.render(<CommentBox />, document.getElementById('content'));
