# node-study
## test pagination 

React component

## Install

#### Install node module package
```
$ cd test-pagination
$ npm install
```

## Compile and build
```
$ npm run build
```

#### You also can use this command
```
$ webpack
```

#### Build with press
```
$ webpack -p
```

## Develop
```
$ npm run dev
```

## Usage
```
//pagination.test.js

import React from 'react';
import ReactDom from 'react-dom';
import Pagination from './components/Pagination';

ReactDom.render(
  <Pagination 
  pageSize={10} 
  total={100}
  />, 
document.getElementById('example'));
```

#### Add react.js/react-dom.js in your html files
```
<!DOCTYPE>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Test pagination</title>
    <meta name="description" content="test pagination" />
    <script src="https://npmcdn.com/react@15.3.1/dist/react.js"></script>
    <script src="https://npmcdn.com/react-dom@15.3.1/dist/react-dom.js"></script>
  </head>
  <body>
  </body>
</html>
```

#### Add the component
```
<!DOCTYPE>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Test pagination</title>
    <meta name="description" content="test pagination" />
    <script src="https://npmcdn.com/react@15.3.1/dist/react.js"></script>
    <script src="https://npmcdn.com/react-dom@15.3.1/dist/react-dom.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script src="http://localhost:3001/js/pagination.test.js"></script>
  </body>
</html>
```

## API

| Parameter        | Description                        | Type          | Default                  |
|------------------|------------------------------------|---------------|--------------------------|
| defaultCurrent   | default current page               | Number        | 1                        |
| current          | current page                       | Number        | undefined                |
| total            | items total count                  | Number        | 0                        |
| defaultPageSize  | default items per page             | Number        | 5                      |
| pageSize         | items per page                     | Number        | 10                       |
| onChange         | page change callback               | Function([changedTo])      | -                     |
| pageSelect       | show page size select            | Bool          | false                    |
| selectOptionsPageSize  | specify the sizeChanger selections | Array<Number> | [10, 20, 30, 40, 50] |
| className        | className of pagination            | String        | -                         |
| simplePager      | when set, show simple pager        | Bool          | false                     |



## 基于React实现的分页组件

本项目是使用ECMAscript 2015的语法,并基于React 框架实现的分页组件.

### 最终效果如下

<img src="doc/img/pagination.gif">



