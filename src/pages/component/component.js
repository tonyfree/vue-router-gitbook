import Vue from 'vue'
import 'css/style.css'
import 'css/website.css'
import 'css/vue.css'

import routes from 'js/routerConfig.js'

let components = {}
routes.forEach(route => {
  if (route.name) {
    components[route.name] = require(`components/${route.name}.vue`)
  }
  if (route.children) {
    route.children.forEach(child => {
      if (child.name) {
        components[child.name] = require(`components/${child.name}.vue`)
      }
    })
  }
})

Vue.config.productionTip = false

new Vue({
  el: '.book',
  data: {
    routes,
    currentView: '',
    curPath: ''
  },
  created() {
    let path = location.hash.substr(1)

    for (let i = 0, len = routes.length; i < len; i++) {
      let cur = routes[i]
      if (cur.path == path) {
        this.currentView = cur.name
        this.curPath = cur.path
        return
      }
      if (cur.children) {
        for (let i = 0, len = cur.children.length; i < len; i++) {
          let sub = cur.children[i]
          if (sub.path == path) {
            this.currentView = sub.name
            this.curPath = sub.path
            return
          }
        }
      }
    }
  },
  methods: {
    to(route) {
      if (route.path==undefined) return
      // history.pushState({}, '', `${location.origin}/${route.path}`)
      location.href = `#${route.path}`
      this.currentView = route.name
      this.curPath = route.path
      document.title = `${route.title} · GitBook`
    }
  },
  components
})


