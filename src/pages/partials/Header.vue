<template>
    <div id="header">
        <div id="left">
            <div id="flex">
                <div id="home"><h1>Home</h1></div>
                <div id="about"><h1>Om oss</h1></div>
                <div id="gallery"><h1>Galleri</h1></div>
                <div id="sponsors"><h1>Sponsorer</h1></div>
                <div id="reviews"><h1>Recensioner</h1></div>
                <div id="groups"><h1>Grupper</h1></div>

                 <login-button id="profile" v-if="!loggedIn" :icon="'fas fa-lock'"></login-button>
                <profile-button v-else></profile-button>
            </div>
        </div>
        <div id="right">

        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
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
        background-color: blueviolet;
        height: 100px;
        color: ;
    }
    #left{
        width: 70%;
        height: 100%;
    }
    #flex{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
    }
    #profile{
        position: absolute;
        right: 40px;
    }
</style>