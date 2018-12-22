import Vue from 'vue'
import Router from 'vue-router'

import homePage from '../components/HomePage'
import addNew from '../components/Add'
import managePage from '../components/Manage'
import aboutPage from '../components/About'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: homePage
    },
    {
      path: '/add',
      name: 'add',
      component: addNew
    },
    {
      path: '/manage',
      name: 'manage',
      component: managePage
    },
    {
      path: '/about',
      name: 'about',
      component: aboutPage
    }
  ]
})

router.push('/home')

export default router
