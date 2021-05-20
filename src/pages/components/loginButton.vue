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
        return this.loggedIn()
      }
    },
    methods:{
      ...mapActions(['loginAction']),
      ...mapGetters(['loggedIn', 'getUser']),
      login(loginCredentials){
        this.log=this.loginAction(loginCredentials)
        this.modalLogin = !this.loggedIn();
      },
      modalSwitch(){
        this.modalLogin = !this.modalLogin
      }
    }
  }
</script>