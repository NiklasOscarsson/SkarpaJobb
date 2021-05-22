<template>
  <div>
    <i v-if="!loggedin" @click="modalSwitch" :class="icon">{{title}}</i>
    <login v-if="modalLogin && !loggedin" @send="login" @close="modalSwitch"></login>
  </div>
</template>

<script>
  import login from './login.vue'
  import {mapActions, mapGetters} from 'vuex'
  export default {
    components: {login},
    props:{
      title:{ 
        type: String,
        required: false,
      },
      icon:{
        type: String,
        required: false,
      }
    },
    data(){
      return {
        log: false,
        user: {},
        modalLogin:false,
      }
    },
    computed:{
      userInfo(){
        return this.getUser()
      },
      loggedin(){
        return this.loggedInState()
      }
    },
    methods:{
      ...mapActions(['loginAction']),
      ...mapGetters(['loggedInState', 'getUser']),
      login(loginCredentials){
        this.log=this.loginAction(loginCredentials)
        this.modalLogin = !this.loggedInState();
      },
      modalSwitch(){
        this.modalLogin = !this.modalLogin
      }
    }
  }
</script>