import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About/index.vue')
  },
  {
    path: '/contact_us',
    name: 'Contact_us',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pay/index.vue')
  },
  {
    path: '/security',
    name: 'security',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solution/security.vue')
  },
  {
    path: '/commerce',
    name: 'commerce',
    component: () => import(/* webpackChunkName: "about" */ '../views/Solution/commerce.vue')
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0;
  next()
});


export default router
