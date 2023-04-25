import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/TheHome.vue' 
import Contact from '../components/TheContact.vue'
import About from '../components/TheAbout.vue'
import Login from '../components/LoginUser.vue'
import Register from '../components/RegisterUser.vue'
import Dashboard from '../components/AdminDashBoard.vue'
import UsersFetch from '../components/UsersFetch.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
       path: '/',
       name: 'Home',
       component: Home
     },
     {
        path: '/contact',
        name: 'Contact',
        component: Contact
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/users',
        name: 'UsersFetch',
        component: UsersFetch
      },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router