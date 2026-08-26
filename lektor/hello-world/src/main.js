import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import DataRenderingView from './views/DataRenderingView.vue'
import UserInteractionView from './views/UserInteractionView.vue'
import DataRenderingDemo from './components/data-rendering/DataRenderingDemo.vue'
import HtmlDirectiveDemo from './components/data-rendering/HtmlDirectiveDemo.vue'

const app = createApp(App)

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/data-rendering',
    component: DataRenderingView,
    children: [
      {
        path: '',
        component: DataRenderingDemo
      },
      {
        path: 'html',
        component: HtmlDirectiveDemo
      }
    ],

  },
  {
    path: '/user-interaction',
    component: UserInteractionView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)

let select = null
let unselect = null

app.directive('selectable', {
  mounted: (el, binding) => {
    select = (event) => {
      event.target.style.backgroundColor = binding.value
    }
    el.addEventListener('mouseenter', select)
    unselect = (event) => {
      event.target.style.backgroundColor = ""
    }
    el.addEventListener('mouseleave', unselect)
  },
  unmounted: (el) => {
    el.removeEventListener('mouseenter', select)
    el.removeEventListener('mouseleave', unselect)
  }
})

app.directive('deleted', (el)=> {
  el.style.textDecoration = "line-through"
})


app.mount('#app')
