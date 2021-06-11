<template>
    <div id="button" :style="cssVars">
        <div id="back" ></div>
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
            required: true,
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
    computed:{
        cssVars(){
            return{
                '--bg-src': `url("../../../assets/img/${this.src}")`,
                '--size': `${this.size}px`,
                '--sizex2': this.size*2+'px',
            }
        }
    },
    data(){
        return {

        }
    }
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
#back{
    height:var(--size);
    width:var(--size);
    border-radius:50%;
    overflow: hidden;
    background-image: url('../../../assets/img/mike-kononovS.jpg');
    background-size: cover;
    background-position: center;
    filter: grayscale(100%);
    z-index: -2;
}
#overlay{
    height:var(--size);
    width:var(--size);
    border-radius:50%;
    background-image: linear-gradient(90deg,#dd0890 0,indigo 100%);
    z-index: -1;
    opacity: .4;
    transform:translateY(var(--size));
}
#text{
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    transform:translateY(var(--sizex2));
    height:var(--size);
    width:var(--size);
}
</style>