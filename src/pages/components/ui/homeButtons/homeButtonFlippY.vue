<template>
  <div ref="button" id="button" class="outer round" :style="cssVars">
    <div class="inner">
      <div class="round front">
        <div id="background" class="front size"></div>
        <div id="overlay" class="size"></div>
        <div id="text" class="size">
          <h3>{{ text }}</h3>
        </div>
      </div>
      <div class="back">
        <page class="frame"></page>
      </div>
    </div>
  </div>
</template>

<script>
import page from '../../../student.vue'
export default {
  components:{page},
  props: {
    src: {
      type: String,
      required: false,
    },
    httpSrc: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    buttonSize: {
      type: Number,
      required: true,
    },
    textSize: {
      type: String,
      required: true,
    },
    hreff: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      text: this.title,
      img: require(`../../../../assets/img/${this.src}`),
      http: this.httpSrc,
      link: "",
      top:0,
      left:0,
      buttonSizeY: this.buttonSize,
      buttonSizeX: this.buttonSize,
    };
  },
  methods: {
    check(){
      setTimeout(()=>{
        this.left = this.$refs.button.getBoundingClientRect().left
      }, 1);
    },
  },
  computed: {
    cssVars() {
      return {
        "--bg-src": `url(${this.img})`,
        "--textSize": this.textSize,
        "--size": `${this.buttonSize}px`,
        "--moveText": this.buttonSize * -1 + "px",
        "--moveLinkTop": this.top * -1 + "px",
        "--moveLinkLeft": this.left * -1 + "px",
      };
    },
  },
  mounted() {
    if (this.httpSrc) {
      this.img = this.httpSrc;
    }
    this.link = this.hreff;
    this.top = this.$refs.button.getBoundingClientRect().top;
    this.buttonSizeY = this.buttonSize;
    this.buttonSizeX = this.buttonSize;
    this.check()
  },
};
</script>

<style scoped>
#background {
  background-image: var(--bg-src);
  background-size: cover;
  background-position: center;
  z-index: -2;
}
 #overlay {
  background-image: linear-gradient(90deg, #dd0890 0, indigo 100%);
  z-index: -1;
  opacity: 0.6;
  border-radius: 50%;
} 
#text {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: translateY(var(--moveText));
  font-size: var(--textSize);
  user-select: none;
  color: white;
}
.size{
  height: 100%;
}
#button{
  transition: .2s;
}
#button:active {
  transform: translateX(-3px) translateY(3px);
} 
#button:active .back, #button:active .front{
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
}
.outer {
  border-radius: 50%;
  background-color: transparent;
  height: var(--size);
  width: var(--size);
  perspective: 1000px;
}
.inner {
  border-radius: 50%;
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;

}
.front {
  color: black;
}
.back {
/*   background-color: #2980b9;
  color: white; */
  transform: rotateY(180deg);
  overflow: hidden;
}
.outer:hover .inner {
  transform: rotateY(180deg);
}
.front,
.back {
  border-radius: 50%;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.5);
  transition: box-shadow .2s;
}
.frame {
  position: absolute;
  pointer-events: none;
  top: var(--moveLinkTop);
  left: var(--moveLinkLeft);
}
</style>