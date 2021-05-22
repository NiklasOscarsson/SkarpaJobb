import { createApp } from 'vue';
import App from './App.vue';
import vuex from 'vuex';
import store from './store/storeMain.js';
import router from './routes/routes.js';

import myHeader from './pages/partials/Header.vue'
import myBackground from './pages/components/ui/background.vue'


const app = createApp(App)
app.use(vuex)
app.use(store)
app.use(router)

app.component('my-header', myHeader);
app.component('my-background', myBackground)


app.mount('#app')
