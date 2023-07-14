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
  },
  {
    path: '/blurry-loading-img',
    name: 'blurry-loading-img',
    component: () => import('../views/BlurryLoadingImg.vue')
  },
  {
    path: '/btn-ripple-effect',
    name: 'btn-ripple-effect',
    component: () => import('../views/BtnRippleEffect.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
