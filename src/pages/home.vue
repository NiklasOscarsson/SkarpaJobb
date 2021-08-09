<template>
<div class="">
  <div>
    <my-background src='https://www.ntigymnasiet.se/wp-content/uploads/2019/12/iStock-846657038.jpg'></my-background>
    <div>
      <div id="first">
        <login v-if="login" @close="login=false"></login>
        <div class="flex">
          <login-button  
            title='Login to account' 
            src="NTI-logga.png" 
            :textSize='textSize' 
            :buttonSize="200" 
            @click="login=true">
          </login-button>
        </div>

        <div class="text">
          <h3>or</h3>
          <h3 >read about what we can do for you</h3>
        </div>  
      </div>

      <div id="flex">
        <!-- Buisness -->
        <router-link class="round" to="/buisness" >
          <home-button-fade 
            :buttonSize='buttonSize' 
            :textSize='textSize' 
            hreff="buisness" 
            src="mike-kononovS.jpg" 
            title="for buisness">
            <!-- picture by Mike Kononov on unsplash.com-->
          </home-button-fade>
        </router-link>

        <!-- Teacher -->
        <router-link class="round" to="/teacher" >
          <home-button-flipp-x 
            :buttonSize='buttonSize' 
            :textSize='textSize' 
            src="science.jpg" 
            hreff="teacher"  
            title="for teachers" 
            >
            <!-- picture by sienceHD on unsplash.com-->
          </home-button-flipp-x>
        </router-link>
        <!-- Student -->
        <router-link class="round" to="/student" >
          <home-button-flipp-y 
            :buttonSize='buttonSize' 
            :textSize='textSize' 
            src="sirisvisualS.jpg" 
            hreff="student" 
            httpSrc="https://www.ntigymnasiet.se/wp-content/uploads/resized/4c/makerspace_webb_3_510x380_563ea2942924804dcd46b29682f419b9.png" 
            title="for students">
            <!-- picture by Sirisvisual on unsplash.com-->
          </home-button-flipp-y>
        </router-link>

      </div>
    </div>
  </div>
  <!-- Bakgrund med 4 val loga in, företag, lärare och student -->
</div>
</template>

<script>
  import loginButton from './components/ui/homeButtons/LoginButton.vue'
  import login from './components/login.vue'
export default {
  components:{loginButton, login},
  data(){
    return {
      login: false,
      buttonSize: 250,
      textSize: '1.7em'
    }
  },
}
</script>

<style scoped>

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
  text-align: center;
}
.round{
  border-radius: 50%;
  text-decoration: none;
}
</style>