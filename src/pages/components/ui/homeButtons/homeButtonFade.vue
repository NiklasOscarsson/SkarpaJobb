<template>

  <div id="shell" :style="cssVars" ref="button" @mouseover="bob">
    
    <div
      :style="cssVars"
      :class="['outer', 'size', 'button']"
      @mouseover="$emit(text)"
    >
      <div id="background"></div>
      <div id="overlay"></div>
      <div id="fade"  >
        <page class="frame">
        </page>
      </div>
      <div id="text" class="round">
        <h3 class="text">{{ text }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import page from '../../../buisness.vue'
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
      top: 0,
      left: 0,
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
        "--sizeX": `${this.buttonSizeX}px`,
        "--sizeY": `${this.buttonSizeY}px`,
        "--moveOverlay": this.buttonSizeY * -1 + "px",
        "--movelink": this.buttonSize * 2 * -1 + "px",
        "--moveText": this.buttonSize * 3 * -1 + "px",
        "--moveLinkTop": (this.top * -1) + "px",
        "--moveLinkLeft": (this.left * -1) + "px",
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
div {
  height: var(--sizeY);
}
#shell {
  height: var(--sizeY);
  width: var(--sizeX);
  pointer-events: none;
  overflow: visible;
}
.button {
  height: var(--sizeY);
  width: var(--sizeX);
  box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.8);
  transition: 0.2s;
  position: absolute;

  pointer-events: all;
}
#background {
  background-image: var(--bg-src);
  background-size: cover;
  background-position: center;
  z-index: -2;
  pointer-events: none;
}
#overlay {
  background-image: linear-gradient(90deg, #dd0890 0, indigo 100%);
  z-index: -1;
  opacity: 0.6;
  transform: translateY(var(--moveOverlay));
  pointer-events: none;
}
#fade {
  overflow: hidden;
  transform: translateY(var(--movelink));
  opacity: 0;
  transition: opacity 0.4s ease-in;
  pointer-events: none;
}
.button:hover #fade {
  opacity: 1;
}
#text {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: translateY(var(--moveText));
  font-size: var(--textSize);
  user-select: none;
  color: white;
  transition: opacity 0.4s ease-in;
  z-index: 100000;
  background-color: transparent;
  pointer-events: none;
}

.button:hover #text {
  opacity: 0;
}
.size {
  border-radius: 50%;
  overflow: hidden;
}
.frame {
  position: absolute;
  pointer-events: none;
  top: var(--moveLinkTop);
  left: var(--moveLinkLeft);
}
</style>
