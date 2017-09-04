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
    curPath: '',
    curRoute: '',
    curIndex: 0,
    routeList: null
  },
  created() {
    this.curPath = this.$route.fullPath
    this.findRoute(this.$route.name)
  },
  methods: {
    to(route,sub) {
      if(sub) {
        this.curRoute = sub
      } else {
        this.curRoute = route
      }
    },
    next() {
      this.findRoute(this.$route.name)
      this.curIndex++
      this.curRoute = this.routeList[this.curIndex]
      router.push({name: this.curRoute.name})
    },
    prev() {
      this.findRoute(this.$route.name)
      this.curIndex--
      this.curRoute = this.routeList[this.curIndex]
      router.push({name: this.curRoute.name})
    },
    findRoute(name) {
      routes.forEach((route,index) => {
        if(route.name == name) {
          this.routeList = routes
          this.curRoute = route
          this.curIndex = index
          return
        }
        if(route.children){
          route.children.forEach((sub,i) => {
            if(sub.name == name) {
              this.routeList = route.children
              this.curRoute = sub
              this.curIndex = i
              return
            }
          })
        }
      })
    }
  },
  router
})
