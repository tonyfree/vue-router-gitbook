import 'css/style.css'
import 'css/website.css'
import 'css/vue.css'
import './index.css'

import Vue from 'vue'
import {router,routes} from './router'

new Vue({
  el: '.book',
  data: {
    routes
  },
  methods: {
    next() {

    },
    prev() {

    }
  },
  router
})
