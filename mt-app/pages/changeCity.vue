<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24">
        <iselect />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Hot />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <ChangeCity />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Iselect from '@/components/changeCity/iselect.vue'
import Hot from '@/components/changeCity/hot.vue'
import ChangeCity from '@/components/changeCity/categroy.vue'
export default {
  components: {
    Iselect,
    Hot,
    ChangeCity
  }
}
</script>

<style lang="scss" scoped>

</style>