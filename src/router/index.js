import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserDescription from "@/views/UserDescription";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/:id',
        name: 'user',
        component: UserDescription
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }


]

const router = createRouter({
  mode:'history',
  history: createWebHistory(),
  routes
})

export default router
