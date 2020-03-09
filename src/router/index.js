import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '@/views/Landing'
import About from '@/views/About'
import Work from '@/views/Work'
import Contact from '@/views/Contact'
import Projects from '@/views/Projects'

import SkiTheStreets from '@/components/SkiTheStreets'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '/index',
        components: {
            Landing,
            About,
            Work,
            Contact,
        }
    },{
        path: '/projects',
        name: 'projects',
        component: Projects,
        children: [{
            path: 'skithestreets',
            component: SkiTheStreets
        },]
    }
    // ,{
    //     path: '/work',
    //     name: 'work',
    //     component: Work,
    // },{
    //     path: '/contact',
    //     name: 'contact',
    //     component: Contact,
    // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
