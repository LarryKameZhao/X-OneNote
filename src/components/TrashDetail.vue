<template>
<div>trash</div>
</template>

<script>
    import Auth from '@/apis/auth'
  export default {
    name: "TrashDetail",
    created () {
      Auth.getInfo()
        .then(res=> {
          if (!res.isLogin) {
            this.$router.push({path:'login'})
          }
        })
    }
  }
</script>

<style scoped>

</style>
