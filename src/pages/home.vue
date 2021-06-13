<template>
<div>
  <my-background src='https://www.ntigymnasiet.se/wp-content/uploads/2019/12/iStock-846657038.jpg'></my-background>
  <div id="window">
    <div id="first">
      <h3 class="title circleLogin">Login to account</h3>
      <div class="text">
        <h3>or</h3>
        <h3 >read about what we can do for you</h3>
      </div>  
    </div>
    <div id="flex">
      <home-button :buttonSize='buttonSize' :textSize='textSize' src="mike-kononovS.jpg" title="for buisness" @click="cool()"><!-- Buisness -->
      <!-- picture by Mike Kononov on unsplash.com-->
      </home-button>
      <home-button :buttonSize='buttonSize' :textSize='textSize' src="science.jpg"  title="for teachers" @click="cool()"><!-- Buisness -->
      <!-- picture by sienceHD on unsplash.com-->
      </home-button>
      <home-button :buttonSize='buttonSize' :textSize='textSize' src="sirisvisualS.jpg" httpSrc="https://www.ntigymnasiet.se/wp-content/uploads/resized/4c/makerspace_webb_3_510x380_563ea2942924804dcd46b29682f419b9.png" title="for students" @click="cool()"><!-- Buisness -->
      <!-- picture by Sirisvisual on unsplash.com-->
      </home-button>
    </div>
  </div>
  <!-- Bakgrund med 4 val loga in, företag, lärare och student -->
</div>
</template>

<script>
export default {

  data(){
    return {
      buisness: false,
      buttonSize: 250,
      textSize: '1.7em'
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
  padding-top: 10%;
}
.circleLogin{
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%; 
  min-height:200px;
  border-radius:100px;
  background-image: linear-gradient(90deg,#ab058b 0,indigo 100%);
  box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.5);
  user-select: none;
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