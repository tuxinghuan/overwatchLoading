# overwatchLoading
## 简介
一个守望先锋Loading小图标的vue.js组件，可以在你的vue项目中直接引入
## 安装
直接下载loading.vue文件，然后在你的vue文件中使用import引入此组件，然后就可以使用了。
例如：
```vue
app.vue
<template>
    ...
    <owloading/>
    ...
<template>
    
<script>
    import owloading from '@/component/loading'
    ...
    
    export default{
    ...
    componet:{
        'owloading':owloading,
        ...
    },
    ...
    }
</script>

...
```

## demo
![img](https://github.com/tuxinghuan/overwatchLoading/blob/master/demo/demo1.gif)

## api
>* color:六边形颜色(例如<owloading color="red" />渲染出来的六边形就是红色)
>* radius:六边形半径(例如<owloading radius="10" />渲染出来的六边形半径就是10px)

效果：

![img](https://github.com/tuxinghuan/overwatchLoading/blob/master/demo/demo2.gif)
