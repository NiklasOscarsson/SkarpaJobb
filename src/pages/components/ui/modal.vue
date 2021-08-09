<template>
  <div id="background" @click.self="$emit('close')">
    <div id="window">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
#background{
  height: 100vh;
  width: 100vw;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
#window{
  background-color: white;
  border-radius: 30px;
  box-shadow: 3px 3px 10px 0px black;
  width: 35%;
  height: 40%;
  z-index: 10000;
}
</style>