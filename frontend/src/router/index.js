import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next('/');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      next('/profile');
    } else {
      next();
    }
  } else {
    next()
  }
});

export default router
