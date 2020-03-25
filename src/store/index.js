import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        projectList: [{
            name: 'Ski The Streets',
            params: 'ski-the-streets',
            description: 'A Colorado mountain wayfinding app. This idea was inspired from a three hour trip to the mountains. I wanted an app that could easily display directions and travel time to my favorite ski mountains.',
            techDescription: 'This is build using the Ski Maps API and directions provided using the Google Maps API. Resulting in a full CRUD dashboard that you are able to add favorites and quickly display routing direction.',
            img: '../assets/images/ski.svg',
            techstack: ['Vanilla Javascript', 'Node.js'],
        },{
            name: 'Ski The Streets',
            params: 'ski-the-streets',
            description: 'A Colorado mountain wayfinding app. This idea was inspired from a three hour trip to the mountains. I wanted an app that could easily display directions and travel time to my favorite ski mountains.',
            techDescription: 'This is build using the Ski Maps API and directions provided using the Google Maps API. Resulting in a full CRUD dashboard that you are able to add favorites and quickly display routing direction.',
            img: '../assets/images/ski.svg',
            techstack: ['Vanilla Javascript', 'Node.js'],
        },{
            name: 'Ski The Streets',
            params: 'ski-the-streets',
            description: 'A Colorado mountain wayfinding app. This idea was inspired from a three hour trip to the mountains. I wanted an app that could easily display directions and travel time to my favorite ski mountains.',
            techDescription: 'This is build using the Ski Maps API and directions provided using the Google Maps API. Resulting in a full CRUD dashboard that you are able to add favorites and quickly display routing direction.',
            img: '../assets/images/ski.svg',
            techstack: ['Vanilla Javascript', 'Node.js'],
        }]
    },
    mutations: {
    },
    actions: {
    },
    getters: {
    },
    modules: {
    }
})
