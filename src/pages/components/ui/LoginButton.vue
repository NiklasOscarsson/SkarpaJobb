<template>
  <div id="button" :style="cssVars">
    <div id="background"></div>
    <div id="overlay"></div>
    <div id="text">
      <h3>{{ title }}</h3>
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
  },
  data() {
    return {
      img: require(`../../../assets/img/${this.src}`),
      http: this.httpSrc,
    };
  },
  mounted() {
    if (this.httpSrc) {
      this.img = this.httpSrc;
    }
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
};
</script>

<style scoped>
div {
  height: 100%;
}
#button {
  height: var(--size);
  width: calc(var(--size) * 2);
  border-radius: 150px;
  box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.5);
  transition: 0.2s;
}
#background {
  background-image: var(--bg-src);
  height: var(--size);
  width: calc(var(--size) * 2);
  border-radius: 150px;
  overflow: hidden;
  background-size: 500px;
  background-position: center;
  /* filter: grayscale(100%); */
  z-index: -2;
}
#overlay {
  height: var(--size);
  width: calc(var(--size) * 2);
  border-radius: 150px;
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
  height: var(--size);
  width: calc(var(--size) * 2);
  font-size: var(--textSize);
  user-select: none;
}
#button:active {
  transform: translateX(-3px) translateY(3px);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
}
</style>