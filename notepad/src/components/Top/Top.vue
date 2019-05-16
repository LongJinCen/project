<template>
  <div class="header">
    <div class="top-left float-left">
      <span class="iconfont">&#xeb61;</span>
    </div>
    <div class="top-right float-right">
      <template v-if="!status.atEdit">
        <v-touch
          class="iconfont v-touch-inline"
          @tap="handleTap('search')"
        >&#xe8ef;</v-touch>
        <v-touch
          class="iconfont v-touch-inline"
          @tap="handleTap('manage')"
        >&#xe627;</v-touch>
      </template>
      <v-touch
        class="statusText"
        v-if="status.isFocus"
        @tap="handleTap('complete')"
      >完成</v-touch>
      <v-touch
        class="statusText"
        v-else-if="status.isManage"
        @tap="handleTap('cancle')"
      >取消</v-touch>
    </div>
    <div class="top-center ">
      <span>全部</span>
      <span class="iconfont">&#xe8ec;</span>
    </div>
  </div>
</template>

<script>
import { getDate } from '../../util.js'
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
      },
      textAreaRef () {
        return this.$store.state.App.textAreaRef
      },
      editId () {
        return this.$store.state.App.id
      }
    },
    methods: {
      handleTap(type, event) {
        switch (type) {
          case 'complete':
              this.handleComplete()
            break;
          case 'cancle':

            break;
          case 'search':
            
            break;
          case 'manage':

            break;
          default:
            break;
        }
      },
      handleComplete () {
        const text = this.textAreaRef.value
        const isEmpty = text.match(/^\s*$/)
        if(isEmpty) {
          console.log('内容不能为空')
          return
        }
        const title = text.match(/^([\w\W]{0,7})/)[0],
              date = getDate()
        if(this.status.isCreate) {
          const newItem = {
            id: Date.now().toString(),
            date,
            content: text,
            title,
            type: '备忘录'
          }
          this.$store.commit('App/createItem', { newItem })
        }
        if (this.status.isUpdate) {
          const updateItem = {
            id: this.editId,
            content: text,
            title,
            date
          }
          this.$store.commit('App/updateItem', { updateItem })
        }
        this.$router.push('/app/home')
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

.top-right .v-touch-inline {
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
  display: inline-block;
}
</style>
