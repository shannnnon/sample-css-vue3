import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/drag-drop',
    name: 'drag-drop',
    component: () => import('../views/DragNDrop.vue')
  },
  {
    path: '/animation-coutdown',
    name: 'animation-coutdown',
    component: () => import('../views/AnimationCoutdown.vue')
  },
  {
    path: '/background-slider',
    name: 'background-slider',
    component: () => import('../views/BackgroundSlider.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
