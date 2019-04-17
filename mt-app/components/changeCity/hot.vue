<template>
  <div class="m-hcity">
    <dl>
      <dt>热门城市:</dt>
      <dd v-for="item in list" :key="item.id" @click="handleClick">
        {{ item.name === '市辖区' ? item.province : item.name}}
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      
    }
  },
  mounted () {
    this.$axios.get('/geo/hotcity').then((res) => {
      if(res.status === 200) {
        this.list = res.data.nList
      }
    })
  },
  methods: {
    handleClick: function (event) {
      const ele = event.target
      this.$store.dispatch('geo/setPosition', {
        address: ele.innerText
      })
      this.$router.push({
        path: '/'
      })
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/css/changeCity/hot.scss"
</style>