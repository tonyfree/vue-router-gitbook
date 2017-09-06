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
      // 编程式路由将覆盖router-link路由
      // router.push({name: 'introduction'})
      // router.push({name: this.curRoute.name})
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
  router,
  watch: {
    '$route'(to, from) {
      console.log('listen $route')
      this.$refs['bookBody'].scrollTop = 0
      // document.title = `${this.curRoute.title} · GitBook`      
    },
    'curRoute'(val) {
      document.title = `${val.title} · GitBook`
      /**
       * 这里没有用'$route'的监听处理，是因为事件触发的优先级：
       * 1.原生绑定事件next、prev执行，编程式导航修改route ==> '$route'监听触发
       * 2.router-link上的事件绑定：to修改route ==> '$route'监听触发 ==> to事件执行 ==> 如果to事件内部通过编程式导航修改route  ==> '$route'监听触发
       */
    }
   }
})
