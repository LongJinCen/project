<template>
  <div>
    <div id="home" ref="wrapper">
      <ul class="content">
        <Card v-for="(item, index) in items" v-bind:key="index" v-bind:item="item"/>
      </ul>
    </div>
    <div class="edit">
      <span class="iconfont">&#xe600;</span>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
import Card from './Component/Card.vue'
import BScroll from 'better-scroll'

export default {
  name: 'home',
  components: {
    Card
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  },
  data() {
    return {
      scroll: null,
      items: [{
        title: '隆金岑',
        type: '备忘录',
        date: '2019/05/15'
      },{
        title: '隆金岑',
        type: '备忘录',
        date: '2019/05/15'
      },{
        title: '隆金岑',
        type: '备忘录',
        date: '2019/05/15'
      },{
        title: '隆金岑',
        type: '备忘录',
        date: '2019/05/15'
      },{
        title: '隆金岑',
        type: '备忘录',
        date: '2019/05/15'
      },{
        title: '隆金岑',
        type: '备忘录',
        date: '2019/05/15'
      },{
        title: '隆金岑',
        type: '备忘录',
        date: '2019/05/15'
      },{
        title: '隆金岑',
        type: '备忘录',
        date: '2019/05/15'
      },{
        title: '隆金岑',
        type: '备忘录',
        date: '2019/05/15'
      },{
        title: '隆金岑',
        type: '备忘录',
        date: '2019/05/15'
      },{
        title: '隆金岑',
        type: '备忘录',
        date: '2019/05/15'
      },{
        title: '隆金岑',
        type: '备忘录',
        date: '2019/05/15'
      },{
        title: '隆金岑',
        type: '备忘录',
        date: '2019/05/15'
      },{
        title: '隆金岑',
        type: '备忘录',
        date: '2019/05/15'
      },{
        title: '隆金岑',
        type: '备忘录',
        date: '2019/05/15'
      },{
        title: '隆金岑',
        type: '备忘录',
        date: '2019/05/15'
      }]
    }
  },
}
</script>

<style scope>
#home {
  width: 7.5rem;
  box-sizing: border-box;
  padding: 0px .1rem;
  overflow: hidden;
  background-color: rgb(240, 238, 229);
  height: calc(100vh - 1rem);
}

.content {
  width: 7.5rem;
  overflow:hidden;
}

.edit {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: rgb(247, 185, 73);
  position: fixed;
  right: .4rem;
  bottom: .4rem;
  overflow: hidden;
  box-shadow: 0 10px 10px -2px rgb(233, 200, 134);
}

.edit span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  font-size: .4rem;
}

.footer {

}

</style>
