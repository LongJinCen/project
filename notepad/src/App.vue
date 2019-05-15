<template>
  <div id="app">
    fasfasdf
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
/* 样式重置 */
#app *{
  -webkit-user-select: none; /* 禁止用户选中文字，安卓无效 */
  -webkit-touch-callout: none; /*禁止长按弹出系统菜单*/
  -webkit-text-size-adjust: 100%; /* 样式重置 */
  -webkit-tap-highlight-color: rgba(0,0,0,0); /*去除android下a/button/input标签被点击时产生的边框 & 去除ios下a标签被点击时产生的半透明灰色背景*/
  -webkit-appearance: none; /* 按钮在ios下都是圆角*/
  border-radius: 0; /*input有个默认圆角 */
}
</style>
