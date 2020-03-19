import Vue from 'vue'
import VueRouter from 'vue-router'
import Projects from '@/views/Projects'
import Project from '@/components/Project'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'projects',
    component: Projects,
},{
    path: '/projects',
    name: 'projects',
    component: Projects,
},{
    path: '/:name',
    name: 'project',
    component: Project,
}] 


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
