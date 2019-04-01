<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd
        v-for="item in menu"
        :key="item.title"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      >
        <i :class="item.type" />{{ item.title }}<span class="arrow" />
      </dd>
    </dl>
    <div
      v-if="kind"
      class="detail"
      @mouseenter="detailEnter"
      @mouseleave="detailLeave"
    >
      <template v-for="item in curdetail.children">
        <h4 :key="item.title">{{ item.title }}</h4>
        <span v-for="v in item.children" :key="v">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: '',
      menu: [
        {
          type: 'food',
          title: '美食',
          children: [
            {
              title: '美食',
              children: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐']
            }
          ]
        },
        {
          type: 'takeout',
          title: '外卖',
          children: [
            {
              title: '外卖',
              children: ['美团外卖']
            }
          ]
        },
        {
          type: 'hotel',
          title: '酒店',
          children: [
            {
              title: '酒店星级',
              children: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        }
      ]
    }
  },
  computed: {
    curdetail: function() {
      return this.menu.filter(value => value.type === this.kind)[0]
    }
  },
  methods: {
    mouseEnter: function(e) {
      this.kind = e.target.querySelector('i').className
    },
    mouseLeave: function(e) {
      this.timer = setTimeout(() => {
        this.kind = ''
      }, 200)
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
