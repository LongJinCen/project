# jianshu
[预览](http://longjincen.cn:8000)
## run
```
  git clone git@github.com:LongJinCen/jianshu.git
  cd jianshu
  npm start
```
## Info
实现了简书的首页、登陆注册页面、登陆校验逻辑、退出登陆、详细页面跳转、写文章权限、以及一些动画效果

数据全是来自本地模拟接口(`/public/api/xxx`), 使用的技术和相关说明如下。
1. [react](https://reactjs.org/)
2. [react-router](https://reacttraining.com/react-router/web/guides/quick-start)
3. [styled-components](https://www.styled-components.com/)： 一个基于`react`的库，可以使用这个库来自定义组件样式
4. [react-transition-group](https://reactcommunity.org/react-transition-group/): 实现动画效果
5. [react-loadable](https://github.com/jamiebuilds/react-loadable): 按需加载，默认是一次性将`bundle`加载完毕,使用这个可以按需加载`bundle`，而不是一次性加载完毕, 配合使用`withRouter`来使用
6. [redux](https://redux.js.org/)
7. [react-redux](https://react-redux.js.org/)
8. [redux-thunk](https://github.com/reduxjs/redux-thunk): 中间件，是得`action`可以是一个函数
9. [immutable](https://facebook.github.io/immutable-js/docs/#/): 让在`reducer`参数中的`state`中不可更改，使用它将`state`进行包装，使用`fromJS(obj)`对对象进行包装，使用`set`、`get`、`getIn`等分别进行修改和获取
10. [redux-immutable](https://github.com/gajus/redux-immutable): 在使用`combineReducers`的时候，生成的整个`state`是一个`js`对象，可以使用`redux-immutable`这个模块提供的`combineReducers`来结合`reducer`,生成的就是一个`immutable`对象 
11. [axios](https://www.npmjs.com/package/axios) 
12. [iconfont](http://iconfont.cn/)矢量图标库

## src
1. common: 放置公用组件
2. pages: 里面每个目录代表一个页面，并且每个页面有自己的`store`
3. static: 静态资源存放，包括图片、`iconfont`
4. store: 整个项目的`reducer`的集中，并使用`combineReducers`结合生成`store`

## reducer
每个页面都有它自己的`store`,`store`中包括了`actionCreator.js、actionType.js、reducer.js`, 所以可以看出每个页面都有负责管理自己页面数据的`reducer`,并最终全部汇集到最外层`store`中来。

## developer-tools
可以在最外层`store/index.js`中看到下面的代码
```
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(applyMiddleware(ReduxThunk))
```
第一行不用在意，这是因为如果你安装了`redux-devtools`,要使用这个工具就必须加上这一行代码,可以参考[这里](https://github.com/zalmoxisus/redux-devtools-extension)
