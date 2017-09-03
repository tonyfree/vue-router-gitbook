import 'css/style.css'
import 'css/website.css'
import 'css/vue.css'

import Vue from 'vue'
import {router,routes} from './router'

new Vue({
  el: '.book',
  data: {
    routes
  },
  methods: {
    to(route,subRoute) {
      if (route.path==undefined) return
      if(subRoute) {
        router.push({path: `${route.path}/${subRoute.path}`})
      } else {
        router.push({path: `${route.path}`})
      }
    }
  },
  router
})
