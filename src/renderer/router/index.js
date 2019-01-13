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
            path: '/homePage',
            // name: 'homePage',
            component: homePage
        },
        {
            path: '/addNew',
            // name: 'addNew',
            component: addNew
        },
        {
            path: '/managePage',
            // name: 'managePage',
            component: managePage
        },
        {
            path: '/aboutPage',
            // name: 'aboutPage',
            component: aboutPage
        }
    ]
})

router.push('/homePage')

export default router
