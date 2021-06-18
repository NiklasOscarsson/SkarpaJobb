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
@import url('https://fonts.googleapis.com/css2?family=Chivo:ital,wght@1,700&display=swap');
  body{
    margin:0;
  }
  #app{
    font-family: 'Chivo', sans-serif;
    color: white;
    /* font-family: Soleto XBold;  //in Adobe fonts*/
  }
</style>
