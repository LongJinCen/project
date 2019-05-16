<template>
  <div id="edit">
    <textarea ref="textarea" @focus="handlefocus"/>
  </div>
</template>

<script>
export default {
  name: 'edit',
  mounted() {
    const id = this.$route.params.id,
          textAreaRef = this.$refs.textarea;
    let result = ''
    if(id !== "null") {
      result = this.$store.getters['App/getById'](id).content;
      this.$store.commit('App/updateStatus', { isUpdate: true, atEdit: true, textAreaRef, id })
    } else {
      this.$store.commit('App/updateStatus', { isCreate: true, atEdit: true, textAreaRef })
      this.$refs.textarea.focus()
    }
    this.$refs.textarea.value = result
  },
  methods: {
    handlefocus () {
      this.$store.commit('App/updateStatus', { isFocus: true })
    }
  },
  beforeDestroy () {
      this.$store.commit('App/updateStatus', {
        isCreate: false,
        isFocus: false,
        atEdit: false,
        isUpdate: false,
        textAreaRef: null,
        curentId: 0,
      })
  }
}
</script>

<style scope>
#edit {
  width: 7.5rem;
  box-sizing: border-box;
  padding: .1rem .2rem;
  overflow: hidden;
  background-color: rgb(240, 238, 229);
  height: calc(100vh - 1rem);
}

textarea {
  border: 0;
  width: 100%;
  height: 100%;
  background-color:rgb(240, 238, 229);
  font-size: 20px;
}

</style>
