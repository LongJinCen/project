<template>
  <div id="app">
    <Top />
    <router-view></router-view>
  </div>
</template>

<script>
import Top from './components/Top/Top.vue'
export default {
  name: 'app',
  data() {
    return {
      dataBase: null
    }
  },
  components: {
    Top
  },
  mounted() {
    let list = localStorage.getItem('noteLists')
    if(list) {
      this.$store.commit('App/readFromLocalStorage', {
        list: JSON.parse(list),
      })
    }
  },
}
</script>

<style>
@import './style.css';
/* 样式重置 */
*{
  -webkit-user-select: none; /* 禁止用户选中文字，安卓无效 */
  -webkit-touch-callout: none; /*禁止长按弹出系统菜单*/
  -webkit-text-size-adjust: 100%; /* 样式重置 */
  -webkit-tap-highlight-color: rgba(0,0,0,0); /*去除android下a/button/input标签被点击时产生的边框 & 去除ios下a标签被点击时产生的半透明灰色背景*/
  -webkit-appearance: none; /* 按钮在ios下都是圆角*/
  border-radius: 0; /*input有个默认圆角 */
  margin: 0;
  padding: 0;
}

input:focus, textarea:focus {
  outline: none;
}

body {
  font-size: 12px;
}

a {
  text-decoration: none;
  color: rgb(30, 30, 30);
}
/* 工具css */
.float-left {
  float: left;
}

.float-right {
  float:right;
}

.clear-float::after {
  content: '';
  display: block;
  clear: both;
}

.one-line-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.v-touch-inline {
  display: inline;
}


@media screen and (min-width: 750px) {
  html {
    width: 750px;
  }
}

</style>
