<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd
        v-for="item in menu"
        :key="item.name"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      >
        <i :class="item.type" />{{ item.name }}<span class="arrow" />
      </dd>
    </dl>
    <div
      v-if="kind"
      class="detail"
      @mouseenter="detailEnter"
      @mouseleave="detailLeave"
    >
      <template v-for="item in curdetail.child">
        <h4 :key="item.title">{{ item.title }}</h4>
        <span v-for="v in item.child" :key="v + '1'">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: '',
      menu: this.$store.state.home.menu
    }
  },
  computed: {
    curdetail: function() {
      return this.menu.filter(value => value.type === this.kind)[0]
    }
  },
  methods: {
    mouseEnter: function(e) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.kind = e.target.querySelector('i').className
    },
    mouseLeave: function(e) {
      this.timer = setTimeout(() => {
        this.kind = ''
      }, 100)
    },
    detailEnter: function(e) {
      clearTimeout(this.timer)
    },
    detailLeave: function(e) {
      this.kind = ''
    }
  }
}
</script>
