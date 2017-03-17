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

### 项目完整目录结构如下
```
├─dist
│  └─js
│          pagination.js
│          pagination.test.js
├─doc
│  └─img
│          pagination.gif       
├─example
│      index.html
├─node_modules
├─src
│   │  index.js
│   │  index.test.js
│   ├─components
│   │      Buttons.js
│   │      Pagination.js
│   │      Select.js
│   ├─lib
│   │      mc-pagination-cal.js
│  .babelrc
│  .eslintignore
│  .eslintrc
│  package.json
│  README.md
│  webpack.config.js
```

#### 目录结构说明

* dist: 存放编译好的js文件,由webpack配置生成
* doc/img: 存放文档资源文件
* example: 存放demo/实例文件
* node_modules: node依赖包,包含react/lodash/webpack等
* src: 项目开发目录
* src/components: 存放组件
* src/lib: 其他工具库
* src/index.js: 分页组件导出
* src/index.test.js: 分页组件demo实例
* .babelrc: babel编译工具配置文件
* .eslintignore: eslint工具过滤器配置文件
* .eslintrc: eslint工具配置文件
* webpack.config.js: webpack配置文件
* README.md: 项目说明文档
* package.json: 项目配置文件

### 具体实现如下

本项目实现的分页组件由多个子组件组成,目前仅实现了基础子组件,之后会不断完善

| Component        | Description                        |
|------------------|------------------------------------|
| Buttons          | 分页按钮,包括每页按钮,下一页按钮,多页跳转按钮  |
| Pagination       | 分页组件主结构                       |
| Select           | 分页组件选择每页显示的数目            |

#### 在`components`目录中新建如下文件
```
Buttons.js // 分页按钮组件
Pagination.js // 分页组件主结构
Select.js // 下拉选择数目组件
```

#### 实现`Buttons`组件

引入react.js
```
import React from 'react';
```

* `ECMAscript 2015`标准,规定了在`js`文件中可以使用`import`/`from`关键字引入其他目录的`js`模块文件

定义`Buttons`类,并继承`React` `Component`父类
```
class Buttons extends React.Component {

}
```

* `ECMAscript 2015`标准,规定了`class`的用法与标准


定义`Buttons`类的构造方法,用来在之后的方法中引用父类(`React.Component`)的`this`对象
```
class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
}
```








