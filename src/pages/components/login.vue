<template>
  <modal>
    <div id="login">
      <h1 class="title">Login</h1>
      <input class="input" type="text" placeholder="Användarnamn" v-model="userName" @keypress.enter="send">
      <input class="input" type="password" placeholder="Lösenord" v-model="password" @keypress.enter="send">
      <input @click="send" type="submit" value="Skicka">
    </div>
  </modal>
</template>

<script>

import modal from './ui/modal.vue'
export default {
  components: {modal},
  data(){
    return {
      userName:'',
      password:''
    }
  },
  methods:{
    send(){
      this.$emit('send', [this.userName, this.password])
    },
  }
}
</script>

<style scoped>
.title{
  margin: 10% 0 15% 0;
}
.input{
  display: block;
  margin: 6% auto;
  width: 70%;
  text-align: center;
  font-size: 2em;
}
</style>