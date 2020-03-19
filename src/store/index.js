import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        projectList: [{
            name: 'Ski The Streets',
            description: '',
            img: '',
            techstack: [],
        },{

        },{

        }]
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        getProjects: (state) => {
            return state.projectList
        }
    },
    modules: {
    }
})
