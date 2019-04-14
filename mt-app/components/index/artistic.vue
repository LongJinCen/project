<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd
        :class="{active:kind==='all'}"
        kind="all"
        keyword="景点">全部</dd>
      <dd 
        :class="{active:kind==='feast'}"
        kind="feast"
        keyword="美食">约会聚餐</dd>
      <dd
        :class="{active:kind==='spa'}"
        kind="spa"
        keyword="丽人">丽人SPA</dd>
      <dd
        :class="{active:kind==='show'}"
        kind="show"
        keyword="电影">电影演出</dd>
      <dd
        :class="{active:kind==='journey'}"
        kind="journey"
        keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="item in cur"
        :key="item.title">
        <el-card
          :body-style="{padding: '0px'}"
          shadow="never">
          <img :src="item.imgUrl" class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.subTitle }}</span></li>
            <li class="price">￥<em>{{ item.currentPrice }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      kind: 'all'
    }
  },
  computed: {
    cur: function() {
      return this.$store.state.home.tab[this.kind]
    }
  },
  methods: {
    over: function(e) {
      let dom = e.target
      let tag = dom.tagName.toLowerCase()
      let self = this
      if (tag === 'dd') {
        self.kind = dom.getAttribute('kind')
        let keyword = dom.getAttribute('keyword')
        self.$store.dispatch({
          type: 'home/setTab',
          tab: self.kind
        })
      }
    }
  },
  mounted() {
    this.$store.dispatch({
      type: 'home/setTab',
      tab: 'all'
    })
  },
}
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
