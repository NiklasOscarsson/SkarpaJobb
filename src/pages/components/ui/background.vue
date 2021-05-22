<template>
    <div id="back" :style="cssVars"></div>
    <div id="overlay"></div>
</template>

<script>
export default {
    props:{
        src:{
            type: String,
            required: true,
        }
    },
    computed:{
        cssVars(){
            return{
                '--bg-src': `url(${this.src})`
            }
        }
    }
}
</script>

<style scoped>
  #back{
    background-image: var(--bg-src);
    transform: scaleX(-1);
    background-size: cover;
    height: 100vh;
    width: 100vw;
    filter: grayscale(100%);
    position: absolute;
    z-index: -2;
  }
  #overlay{
      background-image: linear-gradient(-45deg,#dd0890 0,indigo 100%);
      height: 100vh;
      width: 100vw;
      position: absolute;
      z-index: -1;
      opacity: .6;
  }
</style>