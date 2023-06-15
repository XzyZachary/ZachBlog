---
title: 'React Native学习笔记'
date: '2023-06-15'
tags: ['React Native', 'React']
draft: false
summary: 'React Native学习笔记'
---

最近chatgpt的流行让人不得不想去尝试一下，但是实际业务你却难以想到有比较好的业务转换

有一天逛git发现了这个哥们的[ChatMate-GPT](https://github.com/funnyzak/ChatMate-GPT), 发现很有意思，就打算照抄学一下

万事先看官方文档， 先照着文档搭建环境

需要 node,watchman,ruby

node对应版本管理器 nvm

ruby对应版本管理器 rvm

所有环境安装好后: ```npx react-native init AwesomeProject```

```javascript
cd AwesomeProject
yarn ios
# 或者
yarn react-native run-ios
```

就在执行run的时候发生了第一个报错：

```javascript
PhaseScriptExecution
  
[CP-User]\ Generate\ Specs /Pods.build/Debug-iphonesimulator/FBReactNativeSpec.build
/Script-46EB2E000239C0.sh 

(in target 'FBReactNativeSpec' from project 'Pods')
```

这个问题困扰我2天的时间，我一直以为是版本的问题，不停的重新安装node16，node18，xcode14.1, xcode14.3等等，google git原作者也都说是版本问题

就在第三天，灵光一闪，原来是我文件夹路径的问题！！！！简直了，因为我的文件夹是Zachary's github目录下面，导致上面的报错，换了文件夹一切变得流畅了起来。


只要项目能跑起来，一切就变得简单了。

分析下原作者的整体架构目录

```plain
├── src                      # 源码目录
│   ├── App.tsx              # app根组件
│   ├── actions              # actions
│   ├── assets               # 静态资源
│   ├── components           # 组件
│   ├── config               # 配置文件
│   ├── helper               # 应用服务类
│   ├── hooks                # 钩子
│   ├── i18n                 # 多语言支持
│   ├── navigation           # 路由导航
│   ├── reducers             # reducers
│   ├── store                # store
│   ├── theme                # 主题
│   ├── types                # 类型定义
│   ├── utils                # 工具类
│   └── api                  # API库
├── .editorconfig            # 编辑器配置
├── .eslintrc.js             # eslint的配置文件
├── .gitignore               # 配置git提交需要忽略的文件
├── .husky                   # git钩子配置
├── .prettierrc.js           # 代码格式化规则
├── .watchmanconfig          # Watchman的配置文件，用于监控bug文件和文件变化，并且可以出发指定的操作
├── __tests__                # 测试
├── android                  # Android文件所在目录，包含AndroidStudio项目环境文件；
├── app.json                 #
├── babel.config.js          # Babel的配置文件
├── global.d.ts              # ts全局声明文件
├── index.js                 # 程序入口文件
├── ios                      # iOS文件所在目录，包含XCode项目环境；
├── metro.config.js
├── package.json             # 项目基本信息（比如名称、版本、许可证等元数据）以及依赖信息（npm install安装的模块）等
├── tsconfig.json            # typescript编译配置文件
└── yarn.lock                # 依赖版本锁定文件
```

目录结构清晰明了，就着手开始第一步 App.tsx

基本入口文件还是老三样：
    -  Provider (redux状态管理)
    -  PersistGate (redux永久保存)
    -  ThemeProvider (主题色切换)

有个之前没碰到过的就是```React-navigation```(源于React Native社区对基于Javascript的可扩展且使用简单的导航解决方案的需求) 控制路由的库吧

最后得出
```javascript
<Provider store={store}>
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <ThemeProvider>
        <AppNavigationContainer />
      </ThemeProvider>
    </PersistGate>
</Provider>
```

后续还是继续跟着源码继续敲了下封装的open-ai的工具类，主要内容就是调用`https://api.openai.com/v1/xxx`的相关api进行的聊天

目前只是大概自己的项目中已经跑通了聊天，换肤，切换语言等功能，做了个基础的了解，后续还有很多需要学习的地方。

未完待续