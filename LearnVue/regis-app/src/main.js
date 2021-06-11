import Vue from 'vue'
import app from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import router from './router'

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { app },
})

// window.axios = axios
// Vue.config.productionTip = false

// new Vue({
//     el: '#app',
//     data: {
//         currentRoute: window.location.pathname,
//     },
//     computed: {
//         ViewComponent() {
//             // const matchingView = routes[this.currentRoute]
//             // return matchingView ? require('./' + matchingView + '.vue') : require('./App.vue')
//             return routes[this.currentRoute]
//         },
//     },
//     vuetify,
//     render(h) {
//         return h(this.ViewComponent)
//     },
// })
