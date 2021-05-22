<template>
    <div id="header">
        <div id="left">
            <div id="flex">
                <router-link class="rl" to="/home"><div id="home"><h1>Home</h1></div></router-link>
                <router-link class="rl" to="/home"><div id="about"><h1>Om oss</h1></div></router-link>
                <router-link class="rl" to="/home"><div id="gallery"><h1>Galleri</h1></div></router-link>
                <router-link class="rl" to="/home"><div id="sponsors"><h1>Sponsorer</h1></div></router-link>
                <router-link class="rl" to="/home"><div id="reviews"><h1>Recensioner</h1></div></router-link>
                <router-link class="rl" to="/home"><div id="groups"><h1>Grupper</h1></div></router-link>
            </div>
        </div>
        <div id="right">
            <div id="icons">
                <login-button class="hover" v-if="!loggedin" :iconSize="size" :color="buttonColor"></login-button>
                <profile-button class="hover" v-else :iconSize="size" :color="buttonColor"></profile-button>
            </div>
        </div>
    </div>
</template>

<script>
import loginButton from '../components/loginButton'
import profileButton from '../components/profileButton.vue'
import {mapGetters} from 'vuex'
export default {
    components:{profileButton, loginButton},
    data(){
        return {
            size: 1.4,
            buttonColor: 'white'
        }
    },
    computed:{
        loggedin(){
            return this.loggedInState()
        }
    },
    methods:{
        ...mapGetters(['loggedInState'])
    }
}
</script>


<style scoped>
    #header{
        /* background-image: url('https://karlstad.se/Templates/Extern/Pages/Special/ServiceGuideFile.aspx?fileid=84902d79661a45c093ea5e2aaecb0367');
        background-size: cover; */
        background-image: linear-gradient(90deg,rgba(170, 5, 137, 0.8) 0,rgba(171, 5, 138, 0.8) 60%,rgba(76, 0, 130, 0.8) 100%);
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        }
    #left{
        width: 70%;
        height: 100%;
        display: inline-block;
    }
    #flex{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
    }
    #right{
        display: inline-block;
        width: 10%;
    }
    #icons{
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    .rl{
        text-decoration: none;
        color:inherit
    } 
    .hover:hover{
        cursor: pointer;
    }
</style>