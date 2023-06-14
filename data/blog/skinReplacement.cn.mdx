---
title: 换肤的N种方案
date: '2021-07-29'
tags: ['nuxt', 'sass', 'CSS Property']
draft: false
summary: 网站换肤功能
---

1. 简单粗暴CSS filter

```javascript
filter: invert(1) hue-rotate(180deg);
```

缺点: `无差别变色，有些黄色等其他颜色会有冲突.`

2. 生成多套样式css.

使用覆盖样式实现与scss变量实现会把多套皮肤的样式都编译到一个css文件里面，如果有多套皮肤样式，这个文件是会非常大的。为了解决这样的问题，就自然的想出了拆分scss的实现：

实现方案，通过编译工具与构建工具编译出多套皮肤css，通过js动态的link对应的皮肤样式

```javascript
var theme = /\bt=(\w+)/.exec(location.search);
theme = theme ? theme[1] : "light";
changeTheme(theme);
function changeTheme(theme) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.dataset.type = "theme";
    link.href = "assets/css/theme-" + theme + "/pages/home/home.css";
    link.rel = "stylesheet";
    link.type = "text/css";
    head.appendChild(link);
}
```

3. CSS Property

```javascript
// variable.scss
:root {
  --fill-1: #fff;
  --text: #3c3c3c;
  --text-1: #757575;
  --text-2: #222;
 
  --font-size-large: 18px;
  --font-size-large-x: 22px;
  --font-size-medium: 14px;
  --font-size-medium-x: 16px;
  --font-size-small-s: 10px;
  --font-size-small: 12px;
}
// 深色变量
[data-theme="dark"] {
  --fill-1: #222;
  --text: #fff;
  --text-1: rgba(255, 255, 255, 0.3);
  --text-2: #ffcd32;
}
```

缺点: `兼容性差.`

4. Sass variables

```javascript
// variable.scss 
$colors-light: (
  fill-1: #fff,
  text: #3c3c3c,
  text-1: #757575,
  text-2: #222,
);
 
$colors-dark: (
  fill-1: #222,
  text: #fff,
  text-1: rgba(255, 255, 255, 0.3),
  text-2: #ffcd32,
);

// mixin.scss
@mixin bg-color($key) {
  background-color: map-get($colors-light, $key);
  [data-theme="dark"] & {
    background-color: map-get($colors-dark, $key);
  }
}
@mixin text-color($key) {
  color: map-get($colors-light, $key);
  [data-theme="dark"] & {
    color: map-get($colors-dark, $key);
  }
}
 
<style lang="scss" rel="stylesheet/scss">
@import "assets/variable.scss";
@import "assets/mixin.scss";
.test-list {
    .list-title {
      height: 40px;
      line-height: 40 px;
      text-align: center;
        @include text-color(text-1);
    }
}
</style>
```

基于上面的方案，我们最终采取的第三套方案，但是我们处理兼容到IE11.

很显然，处理兼容就需要polyfill

SPA的项目相对比较简单.

```javascript
// themes.js
import 'mutationobserver-shim';
import cssVars from 'css-vars-ponyfill';
 
 
const createLink = (() => {
  let $link = null;
  return () => {
    if ($link) {
      return $link;
    }
    $link = document.createElement('link');
    $link.id = 'dxxx';
    $link.rel = 'stylesheet';
    $link.type = 'text/css';
    document.querySelector('head').appendChild($link);
    return $link;
  };
})();
 
/**
 * Change theme
 * @param {string} theme - theme name, default
 * @return {string} theme name
 */
const toggleTheme = (theme = 'default') => {
  const $link = createLink();
  $link.href = `https://xxxx/theme/test.css`;
  cssVars({
    watch: false
  });
  setTimeout(function() {
    cssVars({
      watch: true
    });
  }, 0);
  return theme;
};
 
export default toggleTheme;
```

```Nuxt```特殊在于服务端渲染，上面的解决方案是无法满足的，因为他是在客户端渲染完后替换了css。服务端渲染就不能这么做，这样会有空档期。

查询了各个文档，我把目光聚焦在postcss，一个用 JavaScript 工具和插件转换 CSS 代码的工具.

对应的plugin有postcss-css-variables，这个插件传入variable的话，会在编译的是将页面用到var的地方全部替换成对应的颜色，这样既能规避了兼容，又能实现配置。

demo实现完成后，我们就思考如何使他变成调取接口配置，那么粗暴的思路就是，modules里面可以拿到nuxt options包含了nuxt.config.js的所有配置，我们直接强行object挂载

```javascript
import axios from 'axios';
export default async function () {
    const _rest = await axios.get('https://xxxx/xzytest.json');
    this.nuxt.options.build.postcss.plugins['postcss-css-variables'] = {
        variables: _rest.data
    };
};
```

注意点:
```postcss-css-variables是需要postcss8的.```