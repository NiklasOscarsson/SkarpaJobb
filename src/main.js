import { createApp } from 'vue';
import App from './App.vue';
import vuex from 'vuex';
import store from './store/storeMain.js';
import router from './routes/routes.js';

import myHeader from './pages/partials/Header.vue'
import myBackground from './pages/components/ui/background.vue'
import homeButtonX from './pages/components/ui/homeButtons/homeButtonFlippX.vue'
import homeButtonY from './pages/components/ui/homeButtons/homeButtonFlippY.vue'
import homeButtonFade from './pages/components/ui/homeButtons/homeButtonFade.vue'



const app = createApp(App)
app.use(vuex)
app.use(store)
app.use(router)

app.component('my-header', myHeader);
app.component('my-background', myBackground)
app.component('home-button-flipp-y', homeButtonY)
app.component('home-button-flipp-x', homeButtonX)
app.component('home-button-fade', homeButtonFade)



app.mount('#app')
