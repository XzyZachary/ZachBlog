---
title: '静态页面自动化生成'
date: '2023-06-20'
tags: ['Nuxt', 'SSG', 'Node', 'Koa', 'Mongodb']
draft: false
summary: '静态页面自动化生成'
---

### 一、方案调研： 
类似于静态站点生成（SSG），
    - 优点：安全性比较高，因为提供的攻击选项比较少，也不会有服务器的压力，
    - 缺点：因为它是预加载的，包含了大量不定期更改的内容，但是我们的业务出发，是需要定期进行更改的，如果采取SSG这种方案，我们的每次更改都会使得Web项目的静态页面再次预加载，
这种构建随着项目越大，花费的时间就会越多。

### 二、方案确认
但是万变不离其中，核心原理我们得知的，那么就考虑如何去进行动态的生成，因为你预加载是在node层面的编译时，那我们动态生成就可以放在为node层面的运行时。


### 三、框架搭建

根据上面的思路，我们就开始了整体框架的搭建：
    1. 后台管理系统： Vue + Koa + Mongodb
        - 项目管理： 根据项目可以生成不同的模版，不同的页面
        - 静态文档： 添加不同的页面内容，选择对应的模版，添加相关的文档内容或者说明
    2. 预览平台： Vue + Nuxt2
        nuxt为底层基建，根据后台提供的API生成 /_project/_id的预览页面
    3. 中间层（BFF）： Koa
        node层  基于预览平台的框架，利用node层调用nuxt的generator生成/_project/_id的静态HTML页面


这里主要下生成的逻辑，预览平台的其实就可以把它当做一个独立的系统，核心的目录如下：
```plain
├── components               # 组件库
├── pages                    # 路径页面
│   ├── _project             # 动态项目
│   ├── _id.vue              # 动态ID
```
_id.vue文件内容如下：

```javascript
<template>
    <component :is="template" :content="content"></component>
</template>
<script>
export default {
  data() {
    return {}
  },
  async asyncData({ $axios, error, store, params }) {
    const _rest = await $axios.get(`api地址);
    if (_rest.data.code == 200) {
      return {
          template: 'xxxxx', // 默认配置（调取组件库的组件名）
          ..._rest.data.data
      };
    } else {
      error({
        statusCode: 500,
        message: '内部服务器错误'
      });
    }
  },
}
</script>
```

根据上面一套配置过后，我们就可以把相关路径植入到后台管理系统中，就实现了一个简单预览平台

预览完成过后我们就得考虑如何进行动态生成页面，扩展上面的文件目录：

```plain
├── components               # 组件库
├── pages                    # 路径页面
│   ├── _project             # 动态项目
│   ├── _id.vue              # 动态ID
├── services                 # BFF
│   ├── service.js           # 生成服务
```

核心代码如下：就是调用了nuxt实例抛出的generator函数进行build

```javascript
router.post('/generate', async (ctx, next) => {
    const { id, project } = ctx.request.body
    try {
        // 创建一个 Nuxt.js 构建器实例
        const config = require('./nuxt.config.js')
        config.dev = false;
        config.generate = {
            routes: [`/${project}/${id}`]
        }
        const nuxt = new Nuxt(config)
        const generator = new Generator(nuxt)
        await generator.generate({ build: false, init: true })
        // moveFile();
        ctx.body = { success: true, message: "成功" };
    } catch (err) {
        ctx.body = { success: false, message: "失败" };
        console.log(err);
    }
})
```

最后附上我自己写的架构设计 ```偷懒 redis没有接```

![thumbnail-image](/static/images/mysysterm.png)

具体实现代码在[SSG-Generate](https://github.com/XzyZachary/ssg-generate), 你可以提交issue与我讨论, 谢谢！