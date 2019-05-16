<template>
  <v-touch id="card"  @tap="handleRoute">
    <div class="wrap">
      <div class="choose">
        <span class="choosed">
        </span>
        <span class="iconfont">&#xebe6;</span>
      </div>
      <div class="info">
        <p class="title one-line-text">{{ item.title }}</p>
        <p class="other one-line-text">
          <span>{{ item.type }}</span>
          <span>{{ item.date }}</span>
        </p>
      </div>
      <div class="operate">
        <div class="move">
          <span class="iconfont">&#xe7d1;</span>
        </div>
        <div class="delete">
          <span class="iconfont">&#xe617;</span>
        </div>
      </div>
    </div>
  </v-touch>
</template>

<script>
export default {
  name: 'card',
  props: ['item'],
  methods: {
    handleRoute() {
      this.$router.push({
        path: `/app/edit/${this.item.id}`
      })
    }
  },
}
</script>

<style scope>
#card {
  width: 7.5rem;
  height: 60px;
  margin-top: .24rem;
  overflow: hidden;
}

.wrap {
  display: flex;
  height: 60px;
  transform: translate3d(-0.8rem, 0, 0);
}

.active-left {
  transform: translate3d(0, 0, 0);
}

.active-right {
  transform: translate3d(-2.4rem, 0, 0);
}

.choose {
  width: .8rem;
  flex-shrink: 0;
  height: 60px;
  line-height: 60px;
  position: relative;
}

.choose span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.choose .choosed {
  width: .3rem;
  height: .3rem;
  border: 0.02rem solid rgb(194, 184, 175);
  display: inline-block;
  border-radius: 50%;
}

.info {
  width: 100%;
  flex-shrink: 0;
  height: 100%;
  box-sizing: border-box;
  background-color: #ffffff;
  border-left: 0.04rem solid  rgb(88, 87, 86);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 .2rem;
}

.info p:first-child {
  font-size: 16px;
}

.info p:last-child span:first-child {
  color: rgb(67, 67, 67);
}

.info p:last-child span:last-child {
  color: rgb(197, 197, 197);
  margin-left: .1rem;
}

.operate {
  width: 1.6rem;
  flex-shrink: 0;
  height: 100%;
  display: flex;
}

.operate div {
  height: 100%;
  width: 50%;
  line-height: 60px;
  text-align: center;
}

.operate .move {
  background-color: rgb(247, 185, 73);
}

.operate .delete {
  background-color: rgb(231, 88, 93);
}
</style>
