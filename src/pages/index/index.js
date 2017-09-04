import 'css/style.css'
import 'css/website.css'
import 'css/vue.css'
import './index.css'

import Vue from 'vue'
import {router,routes} from './router'

new Vue({
  el: '.book',
  data: {
    routes,
    curPath: ''
  },
  created() {
    this.curPath = this.$route.fullPath
  },
  methods: {
    to(route,sub) {
      router.push({name: sub.name})
      this.curPath = route.path+'/'+sub.path
    },
    next() {

    },
    prev() {

    }
  },
  router
})
