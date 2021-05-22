<template>
    <div>
        <router-link to="/profile">
            <i class="fas fa-user" :style="styles"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    props:{
        iconSize:{
            type:Number,
            default:1,
        },
        color:{
            type:String,
            default: 'black',
        }
    },
    data(){
        return {
            styles:{
                fontSize: this.iconSize+'rem',
                color: this.color,
            }
        }
    }
}
</script>