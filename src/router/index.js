import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContadorView from '../views/ContadorView.vue'
import ParentView from '../views/ParentView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',   
        component: AboutView        
      },
      {
        path: '/contador',
        name: 'contador', 
        component: ContadorView        
      },
      {
        path: '/parent',
        name: 'parent', 
        component: ParentView         
      }
    ],
})

export default router
