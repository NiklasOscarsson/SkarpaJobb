<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <component :is=" Component " />
    </transition>
  </router-view>
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
  .bob{
    position: absolute;
    top: 0;
    left: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: 0.5s opacity ease;
  }
  .fade-enter-from,
  .fade-leave-active {
    opacity: .5;
  }
  .fade-enter-to{
    opacity: 1;
  }
</style>
