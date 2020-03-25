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
            img: require('@/assets/images/ski.svg'),
            techstack: ['Vanilla Javascript', 'Node.js'],
            youtube: 'https://www.youtube.com/watch?v=enI4Y9iDdlA&t=1s',
            github: 'https://github.com/Nepsaco/Ski-the-streets',
        },{
            name: 'Brew Time',
            params: 'brew-time',
            description: 'A data visualization dashboard that displays data from the iSpindel wireless hydrometer. As a avid homebrewer I wanted to see metrics related to my beers fermentaion and turned to the a iSpindel. I created my own integreation to control the apperance and data visualization.',
            techDescription: 'Using a deployed Heroku backend, I created a RESTful API to recieve and send nessecary data to be displayed on my React frontend. The main challenge of this project was configuring the iSpindel to send data using HTTPS protocal on a local network.',
            img: require('@/assets/images/ski.svg'),
            techstack: ['React', 'Node.js', 'Heroku', 'Firebase'],
            youtube: 'https://www.youtube.com/watch?v=ka67j8G7SIs&t=2s',
            github: 'https://github.com/Nepsaco/ispindel-frontend',
        },{
            name: 'Badge',
            params: 'badge',
            description: 'A lightweight augmented reality image tracker. I made this app as a proof of concept for a graffiti lookup system where you could scan a mural and see or upload information about the artist. This iteration scans stickers and compares them to seed data, and attatches information that is related to that image.',
            techDescription: 'A native mobile app, Badge integrates Viro React and React native to make a interactive AR experience. Viro React is an AR package that is able to process images. Using Viro interferes with adding additional packages so my strategy was to build the React Native app from scratch to encapsulate the Viro package.',
            img: require('@/assets/images/ski.svg'),
            techstack: ['React Native', 'Viro React', 'Ruby On Rails', 'Heroku'],
            youtube: 'https://www.youtube.com/watch?v=4TeQ8aCeNAg&feature=youtu.be',
            github: 'https://github.com/Nepsaco/mod-5-frontend',
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
