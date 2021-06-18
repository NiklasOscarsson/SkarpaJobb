<template>
<div>
  <my-background src='https://www.ntigymnasiet.se/wp-content/uploads/2019/12/iStock-846657038.jpg'></my-background>
  <div id="window">
    <div id="first">
      <login v-if="login" @close="login=false"></login>
      <div class="flex">
        <login-button  title='Login to account' src="NTI-logga.png" :textSize='textSize' :buttonSize="200" @click="login=true"></login-button>
      </div>
  <!-- <h3 class="title circleLogin" @click="login=true">Login to account</h3> -->
      <div class="text">
        <h3>or</h3>
        <h3 >read about what we can do for you</h3>
      </div>  
    </div>
    <div id="flex">
      <router-link to="/buisness" ><home-button :buttonSize='buttonSize' :textSize='textSize' href="buisness" src="mike-kononovS.jpg" title="for buisness" @click="cool()"><!-- Buisness -->
      <!-- picture by Mike Kononov on unsplash.com-->
      </home-button></router-link>
      <router-link to="/teacher" ><home-button :buttonSize='buttonSize' :textSize='textSize' src="science.jpg" href="teacher"  title="for teachers" @click="cool()"><!-- Buisness -->
      <!-- picture by sienceHD on unsplash.com-->
      </home-button></router-link>
      <router-link to="/student" ><home-button :buttonSize='buttonSize' :textSize='textSize' src="sirisvisualS.jpg" href="student" httpSrc="https://www.ntigymnasiet.se/wp-content/uploads/resized/4c/makerspace_webb_3_510x380_563ea2942924804dcd46b29682f419b9.png" title="for students" @click="cool()"><!-- Buisness -->
      <!-- picture by Sirisvisual on unsplash.com-->
      </home-button></router-link>
    </div>
  </div>
  <!-- Bakgrund med 4 val loga in, företag, lärare och student -->
</div>
</template>

<script>
  import loginButton from './components/ui/LoginButton.vue'
export default {
  components:{loginButton},
  data(){
    return {
      login: false,
      buttonSize: 250,
      textSize: '1.7em'
    }
  },
  methods:{
    cool(){

    }
  }
}
</script>

<style scoped>
#window{
  width: 100vw;
  height: 100vh;
}
.title{
  margin: 0;
}
#first{
  padding-top: 10%;
}
.flex{
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

}
#flex{
  display: flex;
  justify-content: space-evenly;
}
.circle{
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.472);
  color: #f800ec;
}
.text{
  cursor: default;
  margin: 3%;
  user-select: none;
}
.circleLogin:active{
  transform: translateX(-3px) translateY(3px);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
}
</style>