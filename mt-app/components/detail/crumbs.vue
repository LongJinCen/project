<template>
  <div class="m-crumbs">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">{{ this.$store.state.geo.position.address }}美团</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">{{ this.$store.state.geo.position.address }}{{ type }}</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">{{ this.$store.state.geo.position.address }}{{ decodeURIComponent(keyword) }}</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    keyword: {
      type:String,
      default:'火锅'
    },
    type: {
      type:String,
      default:'美食'
    }
  }
}
</script>
