<template>
  <dl class="m-sum-card">
    <dt>
      <h1>{{ meta.name }}</h1>
      <el-rate
        v-model="meta.rate"
        disabled />
      <span>{{ meta.rate }}分</span>
      <span>人均￥{{ meta.cost }}</span>
      <ul>
        <li>地址：{{ meta.address }}</li>
        <li>电话：{{ meta.tel }}</li>
      </ul>
    </dt>
    <dd>
      <el-carousel
        height="214px"
        indicator-position="none">
        <el-carousel-item
          v-for="(item,idx) in meta.photos"
          :key="idx">
          <h3><img
            :src="item.url"
            :alt="item.title"
            width="100%"
            height="100%"></h3>
        </el-carousel-item>
      </el-carousel>
    </dd>
  </dl>
</template>

<script>
export default {
  data() {
    return {
      meta: {
        rate: 4.9,
        name: '小龙坎老火锅（崇尚国际店)',
        cost: 59,
        address: '涪城区长虹大道崇尚国际',
        tel: '0816-2316668',
        photos: [{
          url: 'https://img.meituan.net/msmerchant/5e09ea9aea69db584d778f2b8155a7d6432541.png@380w_214h_1e_1c',
        }, {
          url: 'http://p1.meituan.net/mogu/d17ed397a1a30aba0c1135c950c60082106396.jpg@92w_50h_1e_1c'
        }, {
          url: 'http://p0.meituan.net/mogu/ef642332640b6c0519fbf0e72257ed52544027.jpg@92w_50h_1e_1c'
        }, {
          url: 'http://p1.meituan.net/mogu/4358593a42dbc31f991952280d5cffb0194998.jpg@92w_50h_1e_1c'
        }, {
          url: 'http://p1.meituan.net/deal/ffae3ba34fda280e770ca45c34db35852006090.jpg@92w_50h_1e_1c'
        }]
      }
    }
  }
}
</script>
