<template class="page-changeCity">
  <div class="m-iselect">
    <span class="name">按省份选择:</span>
    <el-select
      v-model="pvalue"
      placeholder="省份"
    >
      <el-option
        v-for="item in province"
        :key="item.provinceCode"
        :label="item.provinceName"
        :value="item.provinceName"
      />
    </el-select>
    <el-select
      v-model="cvalue"
      :disabled="!city.length"
      placeholder="城市"
    >
      <el-option
        v-for="item in city"
        :key="item.id"
        :label="item.name"
        :value="item.name"
      />
    </el-select>
    <span class="name">直接搜索：</span>
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      @select="handleSelect"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      pvalue: '',
      city: [],
      cvalue: '',
      input: ''
    }
  },
  watch: {
    pvalue: function(newPvalue) {
      const province = this.province.filter(value => value.provinceName === newPvalue)[0]
      this.city = province.cityInfoList
    }
  },
  methods: {
    querySearchAsync: function(queryString, cb) {
      if(queryString) {
        this.$store.dispatch('changecity/setSearchcity', {
          queryString
        }).then((res) => {
          res = res.map(value => ({
            value: value.cityName,
            ...value
          }))
          cb(res)
        })
      }
    },
    handleSelect: function(item) {
      console.log(item, 'item')
    },
  },
  mounted() {
    this.$store.dispatch('changecity/setProvince')
  },
  computed: {
    ...mapState({
      province: state => state.changecity.province
    }),
  },
}
</script>

<style lang="scss">
@import "@/assets/css/changeCity/iselect.scss"
</style>