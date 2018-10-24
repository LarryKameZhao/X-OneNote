<template>
    <span :title="user.username">{{slug}}</span>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: 'SSS'
        },
        slug: 'S'
      }
    }
  }
</script>

<style scoped>
  span{
      color: red;
  }
</style>
