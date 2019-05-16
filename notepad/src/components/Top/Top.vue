<template>
  <div class="header">
    <div class="top-left float-left">
      <span class="iconfont">&#xeb61;</span>
    </div>
    <div class="top-right float-right">
      <template v-if="!status.atEdit">
        <span class="iconfont">&#xe8ef;</span>
        <span class="iconfont">&#xe627;</span>
      </template>
      <span class="statusText" v-if="status.isFocus">完成</span>
      <span class="statusText" v-else-if="status.isManage">取消</span>
    </div>
    <div class="top-center ">
      <span>全部</span>
      <span class="iconfont">&#xe8ec;</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'top',
    computed: {
      status () {
        const appState = this.$store.state.App
        return {
          isCreate: appState.isCreate,
          isFocus: appState.isFocus,
          atEdit: appState.atEdit,
          isUpdate: appState.isUpdate,
          isManage: appState.isManage
        }
      }
    },
}
</script>

<style scope>
.header {
  width: 7.5rem;
  height: 1rem;
  background-color: rgb(240, 238, 229);
  padding: .2rem;
  box-sizing: border-box;
  border-bottom: 0.02rem solid rgb(227, 223, 215)
}

.top-left span {
  font-size: 0.6rem;
}

.top-right span {
  font-size: 0.6rem;
  line-height: .6rem;
}

.top-center {
  margin-left: .6rem;
  margin-right: 1.2rem;
  text-align: center;
  height: .6rem;
  line-height: .6rem;
  font-size: .4rem;
}

.top-center span:nth-child(1) {
  margin-left: .2rem;
  vertical-align: middle;
}

.top-center span:nth-child(2) {
  font-size: .24rem;
  margin-left: 5px;
}

.header .statusText {
  font-size: 15px;
}
</style>
