# Test Less Less测试程序

## Install

#### Download this project

#### Install node module package
```
$ npm install
```

## Compile and build

```
$ webpack
```

### Build with press

```
$ webpack -p
```
 
## About this project 关于本项目


### Document Less 用法总结


#### 新建Less项目空目录,并切换至目录内
```
$ cd test-less
```

#### 执行Node.js npm命令初始化项目目录以新建package.json配置文件:
```
$ npm init
```
#### 按照如下方式填写初始配置:
```
name: test-less (可以直接按回车键)
version: 1.0.0 (可以直接按回车键)
description: The less test project. (可为空)
entry point: (index.js) (可以直接按回车键)
test command:  (直接按回车键)
git repository: (直接按回车键)
keywords: (可以直接按回车键)
author: (作者)
license: (ISC) (可以直接按回车键)
```

#### 执行如下命令安装Less node_module:
```
$ npm install less --save-dev
```
#### 在当前目录下新建Less目录/index.js文件/style.less文件

#### 目录结构说明:
* Less: 存放*.less文件的目录.
* node_module: Less项目Node.js依赖包.
* index.js: 用于编译Less的js文件.
* README.md: 项目说明文档.
* style.less: 主Less文件,用于编译完整css文件.

#### 初始化index.js,用于之后编译style.less,代码如下:
```
'use strict';  //使用严格JavaScript模式

require('./style.less');  //加载style.less
```

#### 接下来在style.less中定义变量,请注意下面的代码仅仅用于测试less是否编译成功,即编译生成的css并不是有效的css属性,代码如下:

在less中定义变量需要按照:`@`+`变量名`的方式,如:
```
@test: 'Hello World!';
```

使用已定义好的变量:
```
.test{
  test: @test;
}
```

#### 接下来安装编译Less用的Node.js工具,在这里使用Webpack,当然还有其他工具如:Gulp/Grunt/less-middleware(主要用于服务端),如果您已按照上面的官方文档中介绍的按照了全局Less编译工具,可以直接执行如下进行编译:
```
$ lessc style.less
```

#### 安装Webpack及其所依赖的工具包:
```
$ npm install webpack extract-text-webpack-plugin less-loader style-loader css-loader --save-dev
```

#### 此时package.json清单如下:
```
{
  "name": "test-less",
  "version": "1.0.0",
  "description": "The less test project.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "lijun",
  "license": "ISC",
  "devDependencies": {
    "css-loader": "^0.26.0",
    "extract-text-webpack-plugin": "^1.0.1",
    "less": "^2.7.1",
    "less-loader": "^2.2.3",
    "style-loader": "^0.13.1",
    "webpack": "^1.13.3"
  }
}
```

#### 在当前项目目录下新建`webpack.config.js`文件,添加如下代码:
```
webpack.config.js
```
```
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractLESS = new ExtractTextPlugin('[name].less');

module.exports = {
    entry: {
      'less':path.resolve(__dirname, 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),//编译生成的css存放目录
        filename: 'build.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract(
            'css?sourceMap!' +
            'less?sourceMap'
          )
        }
      ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
}
```

#### 接下来开始编译style.less,执行如下命令:
```
$ webpack
```

#### 编译生成的文件)说明如下:
* build.js: 之前用于编译Less的index.js文件经过webpack编译成常规浏览器/js编译器可以解析的js文件.
* style.css: style.less编译后的生成的css文件
* build.js.map: build.js文件的sourcemap文件,可用于调试.
* style.css.map: style.css文件sourcemap文件,可用于浏览器调试.

#### 编译生成的css如下:
```
.test {
  test: 'Hello World!';
}
```

#### 更多

如果想压缩编译后的css,那么只需执行如下命令即可:
```
$ webpack -p
```

### Less用法如下:

#### 首先按照Less是支持编写常规css:
```
div{
  position: relative;
  width:100px;
  height: 100px;
  background-color: #000;
} 
```

编译后:
```
div{
  position: relative;
  width:100px;
  height: 100px;
  background-color: #000;
} 
```

#### 变量用法,如上所示,修改`div`的`backgroun-color`属性:
```
@test-blue: #5B83AD;
```

```
div{
  background-color: @test-blue;
}
```

编译后:
```
div {
  background-color: #5B83AD;
}
```

#### 混合(Mixin)用法
```
.test-mixin{
  margin: 0 auto;
  padding: 8px;
}
```

```
.element-1{
  width:100px;
  width:100px;
  height: 100px;
  background-color: #000;
  .test-mixin;
}
```

```
.element-2{
  width:100px;
  width:100px;
  height: 100px;
  background-color: #fff;
  .test-mixin;
}
```

编译后:
```
.test-mixin {
  margin: 0 auto;
  padding: 8px;
}
.element-1 {
  width: 100px;
  height: 100px;
  background-color: #000;
  margin: 0 auto;
  padding: 8px;
}
.element-2 {
  width: 100px;
  height: 100px;
  background-color: #fff;
  margin: 0 auto;
  padding: 8px;
}
```

#### 嵌套用法,这里请注意css父子级的继承关系
```
.element{
  position: relative;

 .test-mixin;
 .test-nested{
   background-color: @test-blue;
 }
}
```

编译后:
```
.element {
  position: relative;
  margin: 0 auto;
  padding: 8px;
}
.element .test-nested {
  background-color: #5B83AD;
}
```

#### 运算,任何颜色,带单位的变量等都可进行运算:
```
@base: 5;
```

```
.box{
  width: 100px + @base;
  color: @test-blue * @base;
  margin: 100% / 2 - @base;
}
```
编译后:
```
.box {
  width: 105px;
  color: #ffffff;
  margin: 45%;
}
```

请注意,如果出现如下css运算属性:
```
.box{
  width: calc(100% - 5px);
}
```

要这样写:
```
.box{
  width: calc(~'100% - 5px');
}
```

#### 函数用法
```
.test-function(@value){
  .box{
    height: 10px * (@value + @base);
  }
}

.test-function(20);
```

编译后
```
.box {
  height: 250px;
}
```

#### 变量选择器用法:
```
.box-@{item}{
  .box;
}
```

编译后:
```
.box-test {
  width: 105px;
  color: #ffffff;
  margin: 45%;
  width: calc(100% - 5px);
  height: 250px;
}
```

#### extend用法:
```
nav ul {
  &:extend(.inline);
  background: blue;
}
.inline {
  color: red;
}
```

编译后:
```
nav ul {
  background: blue;
}
.inline,
nav ul {
  color: red;
}
```

#### 循环用法:

在这里用到了变量选择器
```
.loop(@counter) when (@counter > 0) {
  .loop((@counter - 1));    // next iteration
  .box-@{item}@{counter}{
    .inline;
  } // code for each iteration
}

div {
  .loop(5); // launch the loop
}
```

编译后:
```
.inline,
nav ul {
  color: red;
}
div .box-test1 {
  color: red;
}
div .box-test2 {
  color: red;
}
div .box-test3 {
  color: red;
}
div .box-test4 {
  color: red;
}
div .box-test5 {
  color: red;
}
```

#### Import 用法:

Less支持引入其他Less文件,用@import引入,请注意相对路径的写法

在Less目录内新建test.less
```
test.less
```

```
@test-value: 'This is a test';

.box{
  content: @test-value;
}
```

在style.less 中引入
```
style.less
```

```
@import 'Less/test.less';
```

编译后:
```
.box {
  content: 'This is a test';
}
```