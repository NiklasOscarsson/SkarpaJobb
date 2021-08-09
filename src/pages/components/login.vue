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
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {modal},
  data(){
    return {
      userName:'',
      password:''
    }
  },
  methods:{
    ...mapActions(['loginAction']),
    ...mapGetters(['loggedInState']),
    send(){
      this.loginAction([this.userName, this.password])
      .then(
        setTimeout(()=>{
          if(this.loggedInState() === true){
            this.$router.push('/profile')
          }  
        },200)
    )},
  }
}
</script>

<style scoped>
div{
  text-align: center;
  height: 40%;
}
.title{
  margin: 10% 0 15% 0;
  color:black;
}
.input{
  display: block;
  margin: 6% auto;
  width: 70%;
  text-align: center;
  font-size: 1em;
}
</style>