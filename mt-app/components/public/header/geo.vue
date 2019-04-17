<template>
  <div class="m-geo">
    <i class="el-icon-location" /> {{ address }}
    <nuxt-link to="/changeCity" class="changeCity">切换城市</nuxt-link>
    [香河 廊坊 天津]
  </div>
</template>

<script>
export default {
  computed: {
    address: function () {
      return this.$store.state.geo.position.address
    }
  },
  mounted() {
    console.log(this.address, 'address')
    if(!this.address) {
      this.$store.dispatch('geo/setPosition')
    }
  },
}
</script>

