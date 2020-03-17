import Vue from 'vue'
import VueRouter from 'vue-router'
import Work from '@/views/Work'
import Projects from '@/views/Projects'
import SkiTheStreets from '@/views/SkiTheStreets'
Vue.use(VueRouter)

const routes = [{
    path: '/work',
    component: Work,
    children : [{
        path: '/',
        name: 'work',
        component: Projects
    }]
},{
    path: '/projects',
    name: 'projects',
    component: Projects,
},{
    path: '/ski-the-streets',
    name: 'ski-the-streets',
    component: SkiTheStreets,
}] 


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
