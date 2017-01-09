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