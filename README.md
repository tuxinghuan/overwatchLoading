# overwatchLoading
## 简介
一个守望先锋加载动画小图标的vue.js组件，可以在你的vue项目中直接引入
## 安装

直接使用npm引入：

```npm install vue-overwatch-loading```

然后在vue项目中使用插件的形式引入并使用
```js
//main.js
import VueOverwatchLoading from 'vue-overwatch-loading'
Vue.use(VueOverwatchLoading)
```

```vue
<template>
    ...
    <vue-overwatch-loading />
    ...
<template>
```


## demo
![img](https://github.com/tuxinghuan/overwatchLoading/blob/master/demo/demo1.gif)

## api
通过props传入子组件

>* Color:六边形颜色(例如&lt;owloading Color="red" /&gt;渲染出来的六边形就是红色)
>* Radius:六边形半径(例如&lt;owloading Radius="10" /&gt;渲染出来的六边形半径就是10px)

效果：

![img](https://github.com/tuxinghuan/overwatchLoading/blob/master/demo/demo2.gif)

## 最后
有任何问题欢迎提issue或者PR

