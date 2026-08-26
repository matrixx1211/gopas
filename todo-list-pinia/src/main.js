import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AddView from './views/AddView.vue'
import { createPinia } from 'pinia'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/add",
            name: "add",
            component: AddView
        },
        {
            path: "/edit/:id",
            name: "edit",
            component: AddView
        }
    ]
})

createApp(App)
.use(createPinia())
.use(router)
.mount('#app')
