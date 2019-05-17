<template>
  <v-touch id="card">
    <v-touch class="card-wrap"
      v-bind:class="{card_active_left: status.isManage, card_active_right: isSwiped, card_active_middle: isMiddle}"
      @swipeleft="handleSwipe('left')"
      @swiperight="handleSwipe('right')"
    >
      <div class="card-choose">
        <v-touch class="card-choosed" @tap="handleTap('choose')">
        </v-touch>
        <span class="iconfont" v-if="choosed && status.isAllChoose">&#xebe6;</span>
      </div>
      <v-touch class="card-info" @tap="handleTap('detail')">
        <p class="card-title one-line-text">{{ item.title }}</p>
        <p class="card-other one-line-text">
          <span>{{ item.type }}</span>
          <span>{{ item.date }}</span>
        </p>
      </v-touch>
      <div class="card-operate">
        <v-touch class="card-move" @tap="handleTap('operate-move')">
          <span class="iconfont">&#xe7d1;</span>
        </v-touch>
        <v-touch class="card-delete" @tap="handleTap('operate-delete')">
          <span class="iconfont">&#xe617;</span>
        </v-touch>
      </div>
    </v-touch>
  </v-touch>
</template>

<script>
import Transform from 'css3transform'

export default {
  name: 'card',
  props: ['item'],
  methods: {
    handleTap(type) {
      let exceptType = ['operate-move', 'operate-delete']
      if(this.isSwiped && !exceptType.includes(type)) { // 处理当当前处于往左滑的时候，点击回弹效果
        this.isMiddle = true
        this.isSwiped = false
        return
      }
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
        case 'operate-move':

          break
        case 'operate-delete':
          this.$store.commit('App/deleteItem', { id: this.item.id })
          this.$store.commit('App/updateStatus', { isManage: false, isAllChoose: false })
          this.isMiddle = true
          this.isSwiped = false
          break
        default:
          break;
      }
    },
    handleSwipe(type) {
      switch (type) {
        case 'left':
          this.isSwiped = true
          this.isMiddle = false
          break;
        case 'right':
          this.isMiddle = true
          this.isSwiped = false
          break;
        default:
          break;
      }
    },
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
      choosed: false,
      isSwiped: false,
      isMiddle: false
    }
  },
  updated() {
    if(!this.status.isManage) {
      this.choosed = false
    } else if(this.status.isManage) { //当处于管理列表状态的时候不可滑动
      this.isSwiped = false
      this.isMiddle = false
    }
  },
}
</script>

<style scope>
#card {
  width: 7.3rem;
  height: 60px;
  margin-top: .24rem;
  overflow: hidden;
}

.card-wrap {
  width: 9.9rem;
  display: flex;
  height: 60px;
  transform: translate3d(-0.8rem, 0, 0);
}

.card_active_middle {
  transition: transform .2s;
  transform: translate3d(-0.8rem, 0, 0);
}

.card_active_left {
  transform: translate3d(0, 0, 0);
}

.card_active_right {
  transition: transform .2s;
  transform: translate3d(-2.4rem, 0, 0);
}

.card-choose {
  width: .8rem;
  flex-shrink: 0;
  height: 60px;
  line-height: 60px;
  position: relative;
}

.card-choose span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 0;
}

.card-choose .card-choosed {
  z-index: 10;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: .4rem;
  height: .4rem;
  border: 0.02rem solid rgb(194, 184, 175);
  display: inline-block;
  border-radius: 50%;
}

.card-info {
  width: 7.3rem;
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

.card-info p:first-child {
  font-size: 16px;
}

.card-info p:last-child span:first-child {
  color: rgb(67, 67, 67);
}

.card-info p:last-child span:last-child {
  color: rgb(197, 197, 197);
  margin-left: .1rem;
}

.card-operate {
  width: 1.6rem;
  flex-shrink: 0;
  height: 100%;
  display: flex;
}

.card-operate div {
  height: 100%;
  width: 50%;
  line-height: 60px;
  text-align: center;
}

.card-operate .card-move {
  background-color: rgb(247, 185, 73);
}

.card-operate .card-delete {
  background-color: rgb(231, 88, 93);
}
</style>
