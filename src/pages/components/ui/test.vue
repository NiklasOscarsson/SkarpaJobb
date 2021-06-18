<template>
  <div class="round outer" :style="cssVars">
    <div id="button" class="round inner">
      <div class="round front">
        <div id="background" class="round front"></div>
        <!-- <div id="overlay" class="round"></div>
        <div id="text" class="round">
          <h3>{{ text }}</h3>
        </div> -->
      </div>
      <div class="back round">
        <div class="round back overflow">
          <h1 class="back">bob</h1>
          <router-view class="frame back"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    href: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      text: this.title,
      img: require(`../../../assets/img/${this.src}`),
      http: this.httpSrc,
      link: "",
    };
  },
  mounted() {
    if (this.httpSrc) {
      this.img = this.httpSrc;
    }
    this.link = this.href;
  },
  computed: {
    cssVars() {
      return {
        "--bg-src": `url(${this.img})`,
        "--textSize": this.textSize,
        "--size": `${this.buttonSize}px`,
        "--moveOverlay": this.buttonSize * -1 + "px",
        "--moveText": this.buttonSize * 2 * -1 + "px",
      };
    },
  },
  methods: {
    Flipp() {
      this.text = "bob";
    },
    Flopp() {
      this.text = this.title;
    },
  },
};
</script>

<style scoped>
* {
  height: 100%;
  backface-visibility: hidden;
}
#button {
  box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.5);
}
#background {
  background-image: var(--bg-src);
  overflow: hidden;
  background-size: cover;
  background-position: center;
  z-index: -2;
}
#overlay {
  background-image: linear-gradient(90deg, #dd0890 0, indigo 100%);
  z-index: -1;
  opacity: 0.6;
  transform: translateY(var(--moveOverlay));
}
#text {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: translateY(var(--moveText));
  font-size: var(--textSize);
  user-select: none;
  color: white;
}
#button:active {
  transition: 0.2s;
  transform: translateX(-3px) translateY(3px) rotateY(180deg);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
}
.round {
  border-radius: 50%;
  height: var(--size);
  width: var(--size);
  overflow: hidden;
}




</style>
