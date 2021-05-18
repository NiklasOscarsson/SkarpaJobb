<template>
  <div>
    <button @click="logins('bob')">klicka här</button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    
    methods:{
      ...mapActions(['login', 'test']),
      logins(name){
        this.login(name)
      }
    }
  }
</script>

<style scoped>

</style>