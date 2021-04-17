import { createRouter, createWebHistory } from '@ionic/vue-router';
import Folder from '../views/Folder.vue'
import About from '../views/About.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '',
    redirect: '/folder'
  },
  {
    path: '/folder',
    name: 'app.folder',
    component: Folder
  },
  {
    path: '/about',
    name: 'app.about',
    component: About
  },
  {
    path: '/dashboard',
    name: 'app.dashboard',
    component: Dashboard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
