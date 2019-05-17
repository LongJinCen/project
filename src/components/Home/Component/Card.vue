<template>
  <div id="card">
    <div class="wrap" v-bind:class="{active_left: status.isManage}">
      <div class="choose">
        <v-touch class="choosed" @tap="handleTap('choose')">
        </v-touch>
        <span class="iconfont" v-if="choosed && status.isAllChoose">&#xebe6;</span>
      </div>
      <v-touch class="info" @tap="handleTap('detail')">
        <p class="title one-line-text">{{ item.title }}</p>
        <p class="other one-line-text">
          <span>{{ item.type }}</span>
          <span>{{ item.date }}</span>
        </p>
      </v-touch>
      <div class="operate">
        <div class="move">
          <span class="iconfont">&#xe7d1;</span>
        </div>
        <div class="delete">
          <span class="iconfont">&#xe617;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['item'],
  methods: {
    handleTap(type) {
      switch (type) {
        case 'choose':
          this.choosed = !this.choosed
          this.$store.commit('App/updateStatus', {isAllChoose: true})
          this.$store.commit('App/updateChoosed', { id: this.item.id })
          break;
        case 'detail':
          this.$router.push({
            path: `/app/edit/${this.item.id}`
          })
          break;
        default:
          break;
      }
    }
  },
  computed: {
    status() {
      const app = this.$store.state.App
      return {
        isManage: app.isManage,
        isAllChoose: app.isAllChoose
      }
    }
  },
  data() {
    return {
      choosed: false
    }
  },
  updated() {
    if(!this.status.isManage) {
      this.choosed = false
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

.active_left {
  transform: translate3d(0, 0, 0);
}

.active_right {
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
  z-index: 0;
}

.choose .choosed {
  z-index: 10;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
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
