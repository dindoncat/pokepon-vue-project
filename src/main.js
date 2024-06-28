import { createRouter, createWebHashHistory } from 'vue-router'
import Pokemon from './views/Pokemon.vue'


import { createApp } from 'vue'
import App from './App.vue'


const routes = [
  { path: '/', component: Pokemon },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


createApp(App).use(router).mount('#app')
