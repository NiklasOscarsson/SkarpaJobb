<template>
  <modal>
    <div id="login">
      <h1>Login</h1>
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
.input{
  display: block;
  margin: 20px auto;
  width: 70%;
  text-align: center;
  font-size: 3em;
}
</style>