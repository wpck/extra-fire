import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import './api/mock.ts'
import '@/assets/icons'

const app = createApp(App)
app.use(router)
app.mount('#app')
