# node-study
## study Sass

## Install

#### Please make sure you have [Ruby](https://www.ruby-lang.org/) before next step

#### Install Sass

```
$ gem install sass
```

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

### 安装Ruby

#### Ruby官方下载地址,如下:

```
https://www.ruby-lang.org/zh_cn/downloads/
```
#### 安装完成后执行如下命令:

```
$ ruby -v
```

#### Ruby版本号如下,安装成功

```
ruby 2.3.3p222 (2016-11-21 revision 56859) [x64-mingw32]
```

### 安装Sass

#### 执行如下命令

```
$ gem install sass
```
```
$ sass -v

Sass 3.4.23 (Selective Steve)
```

或者下载Sass package文件,执行如下命令:

```
$ gem install sass-3.4.23.gem -l
```

### 新建项目

#### 新建Sass项目空目录,并切换至目录内

```
$ cd test-sass
```

#### 执行如下命令初始化项目目录

```
$ npm init
```

#### 配置package.json

```
name: test-sass (可以直接按回车键)
version: 1.0.0 (可以直接按回车键)
description: Study sass (可为空)
entry point: (index.js) (可以直接按回车键)
test command:  (直接按回车键)
git repository: (直接按回车键)
keywords: (可以直接按回车键)
author: (作者)
license: (ISC) (可以直接按回车键)
```

#### 在当前目录下新建Sass目录/index.js文件/style.less文件

### 测试style.scss

#### 编写测试代码

```
$test:'Hello world!';
```

```
.test{
  content:$test;
}
```
### 编译Sass

#### 在这里使用Webpack及其相关工具,也可以直接执行sass命令编译sass,如下:

```
$ sass style.scss style.test.css
```

编译后:

```
.test {
  content: "Hello world!"; }

/*# sourceMappingURL=style.test.css.map */
```

#### 安装Webpack及其所依赖的工具包:

```
$ npm install webpack extract-text-webpack-plugin sass-loader style-loader css-loader node-sass --save-dev
```

#### package.json清单

```
{
  "name": "test-sass",
  "version": "1.0.0",
  "description": "Study sass",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jun",
  "license": "ISC",
  "devDependencies": {
    "css-loader": "^0.26.1",
    "extract-text-webpack-plugin": "^1.0.1",
    "node-sass": "^4.2.0",
    "sass-loader": "^4.1.1",
    "style-loader": "^0.13.1",
    "webpack": "^1.14.0"
  }
}
```

#### 在当前项目目录下新建webpack.config.js文件,编写Webpack配置

```
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractLESS = new ExtractTextPlugin('[name].scss');

module.exports = {
    entry: {
      'scss':path.resolve(__dirname, 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),//编译生成的css存放目录
        filename: 'index.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
        {
          test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        }
      ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
}
```

#### 接下来开始编译style.scss,执行如下命令:

```
$ webpack
```

#### 压缩编译后的css

```
$ webpack -p
```

### 基本语法

#### sass支持一般css写法

```
div{
  position: relative;
  width:100px;
  height: 100px;
  background-color: #000;
} 
```

编译后

```
div {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: #000; }
```

#### 变量用法

如上所示,修改"div"的的”backgroun-color”属性

```
$test-blue:#5B83AD;
```

```
div{
  background-color: $test-blue;
}
```


编译后

```
div {
  background-color: #5B83AD; }
```

在字符串中使用变量

```
$left:left
```

```
.test-#{left}-div{
  background-color: $test-blue;
}
```

编译后

```
.test-left-div {
  background-color: #5B83AD; }
```

#### 在Sass中使用计算

```
$base: 8;
```

```
.test-#{left}-div{
  width: 30px * $base;
  margin:$base + 20%;
  top:24px - 30px;
}
```

编译后

```
.test-left-div {
  width: 240px;
  margin: 28%;
  top: -6px; }
```

#### 嵌套用法

可以使用如下两种方式

1.

```
.test-#{left}-div h1{
  font-size:1rem;
}
```

2.

```
.test-#{left}-div {
  h1{
    font-size:1rem;
  }
}
```

编译后

```
.test-left-div h1 {
  font-size: 1rem; }

.test-left-div h1 {
  font-size: 1rem; }
```

属性也可以嵌套,需要注意一些属性需要加`:`冒号

```
.test-#{left}-div{
  border: {
    color: blue;
  }
}
```

编译后

```
.test-left-div {
  border-color: blue; }
```

自身及伪类调用,即`&`用法

```
.test-#{left}-div{
  &{
    border: {
      width:1px;
    }
  }
}
```

```
.test-#{left}-div{
  &:hover{
    background-color: #000;
  }
}
```

编译后

```
.test-left-div {
  border-width: 1px; }
```

```
.test-left-div:hover {
  background-color: #000; }
```

#### 继承

一个选择器继承另一个选择器

```
$right:right;

.test-#{right}-div{
  @extend .test-#{left}-div;
  position: relative;
}
```

编译后

```
.test-left-div, .test-right-div {
  background-color: #5B83AD; }

.test-left-div, .test-right-div {
  width: 240px;
  margin: 28%;
  top: -6px; }

.test-left-div h1, .test-right-div h1 {
  font-size: 1rem; }

.test-left-div h1, .test-right-div h1 {
  font-size: 1rem; }

.test-left-div, .test-right-div {
  border-color: blue; }

.test-left-div, .test-right-div {
  border-width: 1px; }

.test-left-div:hover, .test-right-div:hover {
  background-color: #000; }

.test-right-div {
  position: relative; }
```

显然`.test-right-div`继承了`.test-left-div`所有属性,是用逗号`,`隔开

#### 混合(Mixin)用法

Mixin可用于重用的代码块

```
@mixin left {
　float: left;
　margin-left: 10px;
}
```

使用`@include`调用

```
.test-#{left}-div{
  @include left;
}
```

编译后

```
.test-left-div, .test-right-div {
  　float: left;
  　margin-left: 10px; }
```

mixin可以指定参数和缺省值

```
@mixin font-color($color: #ccc) {
　color:$color
}

.test-#{left}-div{
  @include font-color;
}
```

编译后

```
.test-left-div, .test-right-div {
  　color: #ccc; }
```

可传入参数

```
.test-#{right}-div{
  @include font-color(red);
}
```

编译后

```
.test-right-div {
  　color: red; }
```

用这个方法可以轻松实现繁琐的css属性

```
@mixin rounded($vert, $horz, $radius: 10px) {
　border-#{$vert}-#{$horz}-radius: $radius;
}

.test-#{right}-div{
  @include rounded(top,left,50%);
}
```

编译后

```
.test-right-div {
  border-top-left-radius: 50%; }
```

Sass和Less一样提供了一些颜色函数

```
.test-#{right}-div{
  h1{
    @include font-color(lighten($test-blue, 10%));
  }

  h2{
    @include font-color(darken($test-blue, 10%));
  }

  h3{
    @include font-color(grayscale($test-blue));
  }

  h4{
    @include font-color(complement($test-blue));
  }
}
```

编译后

```
.test-right-div h1 {
  　color: #7d9dbe; }

.test-right-div h2 {
  　color: #476a8e; }

.test-right-div h3 {
  　color: #848484; }

.test-right-div h4 {
  　color: #ad855b; }
```

#### 引入(import)其他scss文件

使用`@import`关键字

在`sass`目录新建`test-import.scss`文件,编写如下代码

```
$test-import-content:'This is test scss import';
```

在`style.scss`中编写如下代码

```
@import 'sass/test-import.scss';

.test-#{left}-div{
  content: $test-import-content;
}
```

编译后

```
.test-left-div, .test-right-div {
  content: "This is test scss import"; }
```

#### 条件语句

使用@if和@else关键字

```
.test-#{left}-div{
  a{
    @if lightness($test-blue) > 30% {
　　　　color: lightness($test-blue);} 
    @else {
　　　　color: #fff;}
  }
}
```

编译后

```
.test-left-div a, .test-right-div a {
  　　　　color: 51.76471%; }
```

循环语句

* for 循环

for from to

```
@for $i from 1 to $base {
  .opacity-#{$i}{
    opacity:$i * 10;
  }
}
```

编译后

```
.opacity-1 {
  opacity: 10; }

.opacity-2 {
  opacity: 20; }

.opacity-3 {
  opacity: 30; }

.opacity-4 {
  opacity: 40; }

.opacity-5 {
  opacity: 50; }

.opacity-6 {
  opacity: 60; }

.opacity-7 {
  opacity: 70; }
```

for from through

```
@for $i from 1 through $base {
  .opacity-#{$i}-through{
    opacity:$i * 10;
  }
}
```

编译后

```
.opacity-1-through {
  opacity: 10; }

.opacity-2-through {
  opacity: 20; }

.opacity-3-through {
  opacity: 30; }

.opacity-4-through {
  opacity: 40; }

.opacity-5-through {
  opacity: 50; }

.opacity-6-through {
  opacity: 60; }

.opacity-7-through {
  opacity: 70; }

.opacity-8-through {
  opacity: 80; }
```

* while循环

使用`@while`关键字

```
$j:6;

@while $j > 0 {.z-index-#{$j} {z-index: $j * 10 } $j: $j - 2;}
```

编译后

```
.z-index-6 {
  z-index: 60; }

.z-index-4 {
  z-index: 40; }

.z-index-2 {
  z-index: 20; }
```

* each循环

```
@each $member in relative, absolute, fixed, static {
　.#{$member} {
    position: $member;
  }
}
```

编译后

```
.relative {
  position: relative; }

.absolute {
  position: absolute; }

.fixed {
  position: fixed; }

.static {
  position: static; }
```

#### 函数用法

使用@function关键字

```
@function double($n) {
 @return $n * 2;
}
.test-#{left}-div div {
  width: double(5px);
}
```

编译后

```
.test-left-div div, .test-right-div div {
  width: 10px; }
```