import { createApp } from 'vue';
import App from './App.vue';
import vuex from 'vuex';
import store from './store/storeMain.js';
import router from './routes/routes.js';
import loginButton from './pages/components/loginButton.vue';
import myHeader from './pages/partials/Header.vue'


const app = createApp(App)
app.use(vuex)
app.use(store)
app.use(router)
app.component('login-button', loginButton);
app.component('my-header', myHeader);


app.mount('#app')
