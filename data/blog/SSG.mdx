---
title: 'SSG Generate'
date: '2023-06-20'
tags: ['Nuxt', 'SSG', 'Node', 'Koa', 'Mongodb']
draft: false
summary: 'Static pages are automatically generated'
---

### 一、Research 
Similar to static site generation（SSG），
    - Advantages: relatively high security, because fewer attack options are provided, and there will be no pressure on the server.
    - Disadvantages: Because it is preloaded, it contains a lot of content that changes from time to time, but our business needs to be changed regularly. If we adopt the SSG solution, every change we make will make the static page of the web project preload again,
This build takes more time as the project gets bigger.

### 二、Plan Confirmation

But everything is inseparable, we know the core principle, then consider how to dynamically generate, because your preloading is compiled at the node level, then our dynamic generation can be placed at runtime at the node level.

### 三、Frame Building

According to the above ideas, we started to build the overall framework：
    1. Admin： Vue + Koa + Mongodb
        - Project Manage： Different templates and different pages can be generated according to the project
        - Edit Content： Add different page content, select the corresponding template, and add relevant document content or instructions
    2. Preview Platform:  Vue + Nuxt2
        Nuxt is the underlying infrastructure, which generates a preview page of /_project/_id according to the API provided by the background
    3. Middle Layer（BFF）： Koa
        node layer based on the framework of the preview platform, use the node layer to call the generator of nuxt to generate a static HTML page of /_project/_id



Here is mainly the generated logic. The preview platform can actually treat it as an independent system. The core directory is as follows:

```plain
├── components               # component library or npm
├── pages                    # router page
│   ├── _project             # dynamic project
│   ├── _id.vue              # dynamic id
```
_id.vue The content of the file is as follows：

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
    const _rest = await $axios.get(`API URL);
    if (_rest.data.code == 200) {
      return {
          template: 'xxxxx', // default config(name in component lib or npm lib)
          ..._rest.data.data
      };
    } else {
      error({
        statusCode: 500,
        message: 'error'
      });
    }
  },
}
</script>
```

According to the above set of configurations, we can implant the relevant paths into the background management system, and realize a simple preview platform

After the preview is completed, we have to consider how to dynamically generate pages and expand the above file directory:

```plain
├── components               # component library or npm
├── pages                    # router page
│   ├── _project             # dynamic project
│   ├── _id.vue              # dynamic id
├── services                 # BFF
│   ├── service.js           # service
```

The core code is as follows: it calls the generator function thrown by the nuxt instance to build

```javascript
router.post('/generate', async (ctx, next) => {
    const { id, project } = ctx.request.body
    try {
        // Create a Nuxt.js builder instance
        const config = require('../nuxt.config.js')
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

Finally, I attach the architecture design I wrote myself ```Lazy and did not connect to redis```

![thumbnail-image](/static/images/mysysterm.png)

Code in[SSG-Generate](https://github.com/XzyZachary/ssg-generate), You can submit an issue to discuss with me, Thanks!