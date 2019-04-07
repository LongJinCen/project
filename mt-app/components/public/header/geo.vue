<template>
  <div class="m-geo">
    <i class="el-icon-location" /> {{ this.$store.state.geo.position.address }}
    <nuxt-link to="/changeCity" class="changeCity">切换城市</nuxt-link>
    [香河 廊坊 天津]
  </div>
</template>
