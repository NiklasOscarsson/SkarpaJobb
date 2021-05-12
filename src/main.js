import { createApp } from 'vue'
import App from './App.vue'
import vuex from 'vuex'
import store from './store/storeMain.ts'


const app = createApp(App)
app.use(vuex)
app.use(store)


app.mount('#app')
