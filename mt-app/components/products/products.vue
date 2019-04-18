<template>
  <dl class="s-item">
    <dt>
      <img
        :src="'//p1.meituan.net/mogu/54c9f12684587c27248678855c167d8e540161.jpg@428w_240h_1e_1c'"
        alt="商品图片">
    </dt>
    <dd>
      <h3><nuxt-link :to="{path:'detail',query:{keyword:meta.title,type:meta.module}}">{{ meta.title }}</nuxt-link></h3>
      <el-rate
        v-model="meta.score"
        :colors="['#ff9900', '#ff9900', '#FF9900']"
        disabled/>
      <span
        v-if="meta.score>4"
        class="s-item-comment">很好</span><span
          v-else-if="meta.socre>3"
          class="s-item-comment">一般</span><span
            v-else
            class="s-item-comment">很差</span>
      <span class="s-item-value">{{ meta.score }}分</span>
      <span class="s-item-comment-total">{{ meta.commentNum }}人评论</span>
      <p>
        <span class="s-item-addr">{{ meta.areaName }}</span>
      </p>
      <p>
        <em class="s-item-price">￥{{ meta.lowPrice }}起</em>
      </p>
      <ul>
        <!-- <li>
          <span class="detail-type">门票</span>{{meta.ticket}}
        </li>
        <li>
          <span class="detail-type">跟团</span>{{meta.group}}
        </li> -->
        <li v-if="meta.scene&&meta.scene.length">
          <span class="detail-type">景酒</span>{{ meta.scene }}
        </li>
        <li v-else>
          <span class="detail-type">景酒</span>暂无描述
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    meta: {
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>
