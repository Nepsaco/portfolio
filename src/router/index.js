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
    path: '/projects/:name',
    name: 'project',
    component: Project,
    props: true,
}] 


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior(to){
        if(to.hash) {
            return {
                selector: to.hash
            }
        }
    },
    routes
})

export default router
