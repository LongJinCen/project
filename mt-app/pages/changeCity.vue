<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24">
        <iselect />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <hot />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">3</el-col>
    </el-row>
  </div>
</template>

<script>
import Iselect from '@/components/changeCity/iselect.vue'
import Hot from '@/components/changeCity/hot.vue'
export default {
  components: {
    Iselect,
    Hot
  }
}
</script>

<style lang="scss" scoped>

</style>