<template>
    <div id="button" :style="cssVars">
        <div id="background" ></div>
        <div id="overlay"></div>
        <div id="text">
            <h3>{{title}}</h3>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        src:{
            type: String,
            required: false,
        },
        httpSrc:{
            type:String,
            required:false,
        },
        title:{
            type: String,
            required: true,
        },
        size:{
            type: Number,
            required: true,
        }
    },
    data(){
        return{
            img: require(`../../../assets/img/${this.src}`),
            http: this.httpSrc,
        }
    },
    mounted() {
        if(this.httpSrc){this.img = this.httpSrc}
    },
    computed: {
        cssVars(){
            return{
                '--bg-src': `url(${this.img})`,
                '--bg-http':`url(${this.http})`,
                '--size':`${this.size}px`,
                '--moveOverlay': this.size*-1+'px',
                '--moveText': this.size*2*-1+'px',
            }
        }
    },
}
</script>

<style scoped>
div{
    height: 100%
}
#button{
    height: var(--size);
    width: var(--size);
    border-radius: 50%;
    box-shadow:3px 3px 30px black 
}
#background{
    background-image: var(--bg-src);
    height:var(--size);
    width:var(--size);
    border-radius:50%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    /* filter: grayscale(100%); */
    z-index: -2;
}
#overlay{
    height:var(--size);
    width:var(--size);
    border-radius:50%;
    background-image: linear-gradient(90deg,#dd0890 0,indigo 100%);
    z-index: -1;
    opacity: .6;
    transform:translateY(var(--moveOverlay));
}
#text{
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    transform:translateY(var(--moveText));
    height:var(--size);
    width:var(--size);
    font-size: 1.7em;
}
</style>