<template>
  <div class=""/>
</template>

<script>
export default {
  layout: 'blank',
  middleware: async (ctx) => {
    let { status, data } = await ctx.$axios.get('users/exit')
    if (status === 200) {
      if (data && data.code === 0) {
        this.$router.push({
          path: '/'
        })
      }
    }
  }
}
</script>