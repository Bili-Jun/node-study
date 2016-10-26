// export HelloWorld from './HelloWorld';
import React from 'react';
import ReactDom from 'react-dom';
import HelloWorld from './HelloWorld/HelloWorld';
import Test from './Test/Test';


ReactDom.render(<HelloWorld phrase="ES6" />, document.getElementById('example'));
ReactDom.render(<Test />, document.getElementById('example'));
