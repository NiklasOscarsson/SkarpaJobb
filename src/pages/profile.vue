<template>
    <div class="bg">
        <div class="grid">
            <div class="menu">
                <p>{{photo}}</p>
                <p>{{username}}</p>
                <p>jobbs taken</p>
                <p>jobbs completed</p>
            </div>
            <div class="taken">
                <ul>
                    <li><p>jobs</p></li>
                </ul>
            </div>
            <div class="avalible">
                <ul>
                    <li><p>jobs</p></li>
                </ul>
            </div>
            <div class="group">
                <ul>
                    <li><p>my groups</p></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            username: '',
            photo: '',
            bio: '',
        }
    },
    methods:{
        ...mapGetters(['getUser','loggedInState']),
        checkIfLoggedIn(){
            if(this.loggedInState()){
                return true
            }else{
                this.$router.push('/home')
            }
        },
        load(){
            const user = this.getUser()
            console.log(user);
            this.username = user.first_name + ' ' + user.last_name;
            this.photo = user.img;
            this.bio = user.bio;
        }
    },
    computed:{
        setName(){
            return this.name
        }
    },
    mounted(){
        this.checkIfLoggedIn()
        this.load()
    }
}
</script>

<style scoped>
.bg{
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: coral;
}
.grid{
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 2fr ;
    grid-template-rows: 1fr;
}
</style>