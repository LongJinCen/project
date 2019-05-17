<template>
  <div>
    <div id="home" ref="wrapper">
      <ul class="content" v-if="items.length > 0">
        <Card v-for="(item, index) in items" v-bind:key="index" v-bind:item="item"/>
      </ul>
      <ul class="content" v-else>
        <span>暂无记录</span>
      </ul>
    </div>

    <router-link to="/app/edit/null" v-if="!status.isManage">
      <v-touch class="edit">
        <span class="iconfont">&#xe600;</span>
      </v-touch>
    </router-link>

    <div class="footer" v-if="status.isManage">
      <v-touch class="type" @tap="handleTap('type')">
        <span class="iconfont">&#xe7d1;</span>
      </v-touch>
      <v-touch class="delete" @tap="handleTap('delete')">
        <span class="iconfont">&#xe617;</span>
      </v-touch>
    </div>
  </div>
</template>

<script>
import Card from './Component/Card.vue'
import BScroll from 'better-scroll'

export default {
  name: 'home',
  components: {
    Card
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
      this.$store.commit('App/updateStatus', { listRef: this.$refs.wrapper })
    })
  },
  updated: function () {
    this.$nextTick(() => {
      this.scroll.refresh()
      if(this.status.isManage) {
        this.$refs.wrapper.style.height = `calc(100vh - 1.9rem)`
      }
    })
  },
  data() {
    return {
      scroll: null,
    }
  },
  computed: {
    items () {
      return this.$store.state.App.list
    },
    status() {
      const app = this.$store.state.App
      return {
        isManage: app.isManage
      }
    },
    listRef() {
      return this.$store.state.App.listRef
    }
  },
  methods: {
    handleTap(type) {
      switch (type) {
        case 'type':
          break;
        case 'delete':
          this.$store.commit('App/deleteItem', {})
          this.$store.commit('App/updateStatus', { isManage: false , isAllChoose: false })
          this.listRef.style.height = 'calc(100vh - 1rem)'
          break;
        default:
          break;
      }
    }
  },
}
</script>

<style scope>
#home {
  width: 7.5rem;
  box-sizing: border-box;
  padding: 0px .1rem;
  overflow: hidden;
  background-color: rgb(240, 238, 229);
  height: calc(100vh - 1rem);
  position: relative;
}

.content {
  width: 7.3rem;
  overflow:hidden;
}

.content span:first-child {
  font-size: 20px;
  color: rgb(213, 213, 213);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.edit {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: rgb(247, 185, 73);
  position: fixed;
  right: .4rem;
  bottom: .4rem;
  overflow: hidden;
  box-shadow: 0 10px 10px -2px rgb(233, 200, 134);
}

.edit span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  font-size: .4rem;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 7.5rem;
  height: .9rem;
  display: flex;
}

.footer div {
  flex-shrink: 1;
  flex-grow: 1;
  line-height: .9rem;
  text-align: center;
}
.footer div:first-child {
  background-color: rgb(247, 185, 73);
}

.footer div:last-child {
  background-color: rgb(231, 88, 93);
}

.footer div span {
  font-size: .4rem;
}

</style>
