<template>
    <div id="back" :style="cssVars"></div>
    <div id="overlay"></div>
    <div id="darken"></div>
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
    z-index: -200;
  }
  #overlay{
    background-image: linear-gradient(-45deg,#dd0890 0,indigo 100%);
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: -199;
    opacity: .6;
  }
  #darken{
    background-color: black;
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: -198;
    opacity: .45;
  }
</style>