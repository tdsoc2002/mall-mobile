# mall-mobile

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

- 目录结构

  - public 

    存放web资源文件，不参与编译，直接原样打包（可以直接访问）

    index.html 唯一的html页面文件

  - src/assets 

    存放web资源文件，参与编译

  - src/components

    组件目录，自定义的公共组件

  - src/router/index.js 

    路由配置

  - src/views 

    页面组件目录（路由组件）

  - App.vue 

    核心App组件

  - main.js文件 

    入口js文件

- 配置文件

  - package.json

    ```json
    {
      "name": "mall-mobile",
      "version": "0.1.0",
      "private": true,
      "scripts": {
        "serve": "vue-cli-service serve",
        "build": "vue-cli-service build"
      },
      "dependencies": {
        "core-js": "^3.6.5",
        "vue": "^2.6.11",
        "vue-router": "^3.2.0",
        "vuex": "^3.4.0"
      },
      "devDependencies": {
        "@vue/cli-plugin-babel": "~4.5.0",
        "@vue/cli-plugin-router": "~4.5.0",
        "@vue/cli-plugin-vuex": "~4.5.0",
        "@vue/cli-service": "~4.5.0",
        "vue-template-compiler": "^2.6.11"
      },
      "browserslist": [
        "> 1%",
        "last 2 versions",
        "not dead"
      ]
    }
    ```

## 单页面应用  +  组件

- 单页面应用

  整个web应用中就一个html页面(public/index.html)

  所有的页面都是vue组件，切换页面其实是在切换组件.

- 面向组件

  - 每个页面都是一个组件(路由组件)
  - 页面中的每个模块也都是一个组件(非路由组件)

## MVVM

ViewModel  View  Model

- 核心思想就是把数据(Model)  和  视图(View)分开
- html只定义页面结构
- js准备数据
- vue可以把数据加载(渲染)到html中


## axios和mockjs

- axios

  axios可以用来发送异步请求调用后端接口.

  - 安装axios

    ```
    npm install axios -S
    ```

  - utils/request.js

  - api/api.js

  - 在需要调用接口的地方引入

- mockjs

  mockjs核心功能： 能快速生成模拟数据；能拦截ajax请求。

  - 安装mockjs

    ```
    npm install mockjs -D
    ```

  - api/mock.js

  - 在main.js中引入