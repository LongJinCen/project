## notepad
## Start
```
 git clone -b notepad https://github.com/LongJinCen/project.git
 cd project
 npm install
 npm run serve
```
## info
## 参照

开发时参照 iphone6, 真机测试使用的是 huawei p20.

### 插件

由于编写插件需要消耗大量时间，自己也是头一次写移动端项目，虽然对布局还是比较了解，但是事件方面自己写还是很有难度，这里直接采用了别人写好的插件
- [Vue-touch](https://github.com/vuejs/vue-touch/tree/next]): 提供了触摸相关的事件的一个组件
- [better-scroll](https://github.com/ustbhuangyi/better-scroll): 列表滚动使用到这个插件
- [transformjs](https://github.com/AlloyTeam/AlloyTouch/tree/master/transformjs): Alloyteam封装的一个插件，可以用来配合 js 实现动画

## 移动端布局

移动端布局有很多种方式，这里主要是使用了 **rem、vh、vw**，来布局, 原理为根据视口大小动态设置根节点大小的字体。

```javascript
(function(doc, win, designWidth) {
      const html = doc.documentElement;
      const refreshRem = () => {
        const clientWidth = html.clientWidth;
        if (clientWidth >= designWidth) {
          html.style.fontSize = '100px';
        } else {
          html.style.fontSize = 100 * (clientWidth / designWidth) + 'px';
        }
      };
      doc.addEventListener('DOMContentLoaded', refreshRem);
  })(document, window, 750);//以iphone6为准
```
## coding

存储使用的是 localstorage, 尝试使用过 IndexedDB， 但是貌似不支持, 都没有 `onupgradeneeded` 方法，配合 `Vuex`, `每次在mutation`里更新 `list` 数据时都更新, localstorage, 在页面挂载完成时去读取。配合 `vue-router` 实现路由.

标题从内容中截取。图标使用 阿里巴巴矢量图库 iconfont.

## 功能
- 新建
- 删除
- 更新
- 批量管理
- 分类: TODO
