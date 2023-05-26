import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login/Login.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home/Home.vue')
      },
      {
        path: '/inventory',
        name: 'inventory',
        component: () => import('../views/Incentory/InventoryInfo.vue')
      },
      {
        path: '/userset',
        name: 'userset',
        component: () => import('../views/Userset/Userset.vue')
      },
      {
        path: '/theme',
        name: 'theme',
        component: () => import('../views/Theme/Theme.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
