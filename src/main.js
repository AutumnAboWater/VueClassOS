import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from "axios";

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
axios.defaults.baseURL = 'http://localhost:3000/'
app.mount('#app')
