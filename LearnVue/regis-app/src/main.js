import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import routes from './routes'

window.axios = axios
Vue.config.productionTip = false

new Vue({
    data: {
        currentRoute: window.location.pathname,
    },
    computed: {
        ViewComponent() {
            const matchingView = routes[this.currentRoute]
            return matchingView ? require('./' + matchingView + '.vue') : require('./App.vue')
        },
    },
    vuetify,
    render: (h) => h(App),
}).$mount('#app')
