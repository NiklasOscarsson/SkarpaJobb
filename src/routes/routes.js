import {createRouter, createWebHistory} from 'vue-router'

import home from '../components/pages/home.vue'
import student from '../components/pages/student.vue'
import teacher from '../components/pages/teacher.vue'
import buisness from '../components/pages/buisness.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect:'/home'},
    {path: '/home', component: home, name: 'home'},
    {path: '/student', component: student, name: 'student'},
    {path: '/teacher', component: teacher, name: 'teacher'},
    {path: '/buisness', component: buisness, name: 'buisness'},
  ]
})

export default router