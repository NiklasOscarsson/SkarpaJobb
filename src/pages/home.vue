<template>
  <my-background src='https://www.ntigymnasiet.se/wp-content/uploads/2019/12/iStock-846657038.jpg'></my-background>
  <div id="window">
    <div id="first">
      <h3 class="title circleLogin">Login to account</h3>
      <h3 class="text">or</h3>
      <h3 class="text">read about what we can do for you</h3>
    </div>
    <div id="flex">
      <home-button size="250" src="mike-kononovS.jpg" title="for buisness" @click="cool()"><!-- Buisness -->
      </home-button>
      <div><!-- Teacher -->
        <h3 id="teacher" class="title circle">for teachers</h3>
      </div>
      <div><!-- Student -->
        <h3 id="student" class="title circle">for students</h3>
      </div>
    </div>
  </div>
  <!-- Bakgrund med 4 val loga in, företag, lärare och student -->

</template>

<script>
export default {

  data(){
    return {
      buisness: false
    }
  },
  methods:{
    cool(){
      console.log(this.buisness);
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
  padding-top: 20%;
}
.circleLogin{
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  min-height:130px;
  border-radius:100px;
  background-image: linear-gradient(90deg,#ab058b 0,indigo 100%);
  box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.472);
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
}
#buisness{
  background-image:url("../assets/img/mike-kononovS.jpg");
  background-size: cover;
  background-position: center;
}/* Photo by Mike Kononov on Unsplash */
#teacher{
  background-image:url("../assets/img/science.jpg");
  background-size: cover;
  background-position: center;
  }/* Photo by science in HD on Unsplash */
#student{
  background-image:url("https://www.ntigymnasiet.se/wp-content/uploads/resized/4c/makerspace_webb_3_510x380_563ea2942924804dcd46b29682f419b9.png");
  background-size: cover;
  background-position: center;
  background-color: black;
}/* Photo by NTIG */
</style>