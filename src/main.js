import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './styles/main.css'

// Define a single route for your SPA
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: App
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')