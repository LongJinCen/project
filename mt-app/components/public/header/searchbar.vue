<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <a href="//cd.meituan.com">
          <img
            src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
            alt="美团"
          />
        </a>
      </el-col>
      <el-col :span="12" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchText"
            placeholder="搜索商家或点"
            @focus="focus"
            @blur="blur"
            @input="input"
          />
          <button class="el-button el-button--primary">
            <i class="el-icon-search" />
          </button>
          <dl v-if="isHot" class="hotPlace">
            <dt>热门搜索</dt>
            <dd v-for="item in hotList" :key="item">{{ item }}</dd>
          </dl>
          <dl v-if="isSearchList" class="searchList">
            <dd v-for="item in searchList" :key="item">{{ item }}</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">故宫博物馆</a>
          <a href="#">故宫博物馆</a>
          <a href="#">故宫博物馆</a>
          <a href="#">故宫博物馆</a>
          <a href="#">故宫博物馆</a>
        </p>
        <ul class="nav">
          <li>
            <nuxtLink to="/" class="takeout">美团外卖</nuxtLink>
          </li>
          <li>
            <nuxtLink to="/" class="movie">猫眼电影</nuxtLink>
          </li>
          <li>
            <nuxtLink to="/" class="hotel">美团酒店</nuxtLink>
          </li>
          <li>
            <nuxtLink to="/" class="apartment">民宿/公寓</nuxtLink>
          </li>
          <li>
            <nuxtLink to="/" class="business">商家入驻</nuxtLink>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund">
              <p class="txt">随时退</p>
            </i>
          </li>
          <li>
            <i class="single">
              <p class="txt">不满意免单</p>
            </i>
          </li>
          <li>
            <i class="overdue">
              <p class="txt">不满意退</p>
            </i>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
      isFocus: false,
      hotList: ['火锅', '火锅'],
      searchList: ['火锅', '火锅', '火锅', '火锅']
    }
  },
  computed: {
    isHot: function() {
      return this.isFocus && !this.searchText
    },
    isSearchList: function() {
      return this.isFocus && this.searchText
    }
  },
  methods: {
    focus: function() {
      this.isFocus = true
    },
    blur: function() {
      this.isFocus = false
    },
    input: function(event) {}
  }
}
</script>
