<template>
  <router-view></router-view>
</template>

<script>
export default {
  methods: {
    get(){
      return this.$store.state.name
    }
  },
}
</script>

<style>
  *{
    margin: 0;
  }
</style>
