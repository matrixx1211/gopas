import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ToDoList from './ToDoList.vue'
import TodoForm from './TodoForm.vue'

createApp(App)
.use(createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'list',
            component: ToDoList
        },
        {
            path: '/create',
            name: 'create',
            component: TodoForm
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: TodoForm
        }
    ]
}))
.mount('#app')
