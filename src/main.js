import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import VueAxios from 'vue-axios'

createApp(App).use(store).use(router).use(VueAxios, axios).use(bootstrap).mount('#app')
