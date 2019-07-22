require("exports-loader?!./l.min.js")

import Vue from 'vue'

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement);

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueChart from 'vue-chart-js'

Vue.use(VueChart)

import VueRouter from "vue-router";
import Vuetify from 'vuetify'

import MyProfile from './views/MyProfile.vue'
import MyRepositories from './views/MyRepositories.vue'
import App from './App.vue';
import colors from 'vuetify/es5/util/colors'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/repositories',
            name: "repositories",
            component: MyRepositories
        },
        {
            path: '/profile',
            name: "profile",
            component: MyProfile
        }
    ]
})
Vue.use(Vuetify, {
    options: {
        customProperties: true
    },
    theme: {
        primary: '#2196f3',
        secondary: '#3f51b5',
        accent: '#673ab7',
        error: '#f44336',
        warning: '#e91e63',
        info: '#00bcd4',
        success: '#009688'
    }
})

new Vue({
    el: "#app",
    router,
    template: "<app/>",
    components: {
        App
    }
}).$mount("#app");

//import RdaCertification from './rda-certification-chart/rda-certification-chart.vue';


ljs.addAliases({
    dep: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.4.1/document-register-element.js',
        'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min.js'
    ]
})

ljs.load('dep', function() {

    if (!window.registredAerisElements) {
        window.registredAerisElements = [];
    }

    var timer;

    function stopTimer() {
        clearInterval(timer);
    }

    function registerElement(name, component) {
        if (!window.registredAerisElements) {
            window.registredAerisElements = [];
        }
        if (window.registredAerisElements.indexOf(name) < 0) {
            Vue.customElement(name, component);
            window.registredAerisElements.push(name)
        }
    }

    function register() {
        console.info("trying to register bgi metadata components")

        console.info("Start registration of rda certification components")
        console.info("Registred elements at this time: " + window.registredAerisElements)

        registerElement('rda-certification', RdaCertification);
        registerElement('rda-app', App);

        stopTimer()
        console.info("Rda certfication components registration complete")

    }

    timer = setInterval(function() { register() }, 1000);
})