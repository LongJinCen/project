<template>
  <div>
    <div id="home" ref="wrapper">
      <ul class="content">
        <Card v-for="(item, index) in items" v-bind:key="index" v-bind:item="item"/>
      </ul>
    </div>
    <router-link to="/app/edit/null">
      <v-touch class="edit">
        <span class="iconfont">&#xe600;</span>
      </v-touch>
    </router-link>
    <div class="footer">

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
    })
  },
  updated: function () {
    this.$nextTick(() => {
      this.scroll.refresh()
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
}

.content {
  width: 7.5rem;
  overflow:hidden;
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

}

</style>
