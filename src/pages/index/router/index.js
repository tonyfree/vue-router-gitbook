import Vue from 'vue'
import Router from 'vue-router'

let routes = [{
  path: '/',
  redirect: '/introduction.html'
},{
  title: 'Introduction',
  path: '/introduction.html',
  name: 'introduction',
  component: require('components/introduction.vue')
}, {
  title: '安装',
  path: '/installation.html',
  name: 'installation',
  component: require('components/installation.vue')
}, {
  title: '基础',
  path:'/essentials',
  name: 'essentials',
  component: require('components/essentials.vue'),
  children: [{
    title: '开始',
    path: 'getting-started.html',
    name: 'gettingStarted',
    component: require('components/gettingStarted.vue')
  }, {
    title: '动态路由匹配',
    path: 'dynamic-matching.html',
    name: 'dynamicMatching',
    component: require('components/dynamicMatching.vue')
  }, {
    title: '嵌套路由',
    path: 'nested-routes.html',
    name: 'nestedRoutes',
    component: require('components/nestedRoutes.vue')
  }, {
    title: '编程式导航',
    path: 'navigation.html',
    name: 'navigation',
    component: require('components/navigation.vue')
  }, {
    title: '命名路由',
    path: 'named-routes.html',
    name: 'namedRoutes',
    component: require('components/namedRoutes.vue')
  }, {
    title: '命名视图',
    path: 'named-views.html',
    name: 'namedViews',
    component: require('components/namedViews.vue')
  }, {
    title: '重定向 和 别名',
    path: 'redirect-and-alias.html',
    name: 'redirectAndAlias',
    component: require('components/redirectAndAlias.vue')
  }, {
    title: 'HTML5 History 模式',
    path: 'history-mode.html',
    name: 'historyMode',
    component: require('components/historyMode.vue')
  }]
},{
  title: '进阶',
  path: '/advanced',
  name: 'advanced',
  component: require('components/advanced.vue'),
  children: [{
    title: '导航钩子',
    path: 'navigation-guards.html',
    name: 'navigationGuards',
    component: require('components/navigationGuards.vue')
  }, {
    title: '路由元信息',
    path: 'meta.html',
    name: 'routerMeta',
    component: require('components/routerMeta.vue')
  }, {
    title: '过渡动效',
    path: 'transitions.html',
    name: 'transitions',
    component: require('components/transitions.vue')
  }, {
    title: '数据获取',
    path: 'data-fetching.html',
    name: 'dataFetching',
    component: require('components/dataFetching.vue')
  }, {
    title: '滚动行为',
    path: 'scroll-behavior.html',
    name: 'scrollBehavior',
    component: require('components/scrollBehavior.vue')
  }, {
    title: '懒加载',
    path: 'lazy-loading.html',
    name: 'lazyLoading',
    component: require('components/lazyLoading.vue')
  }]
},{
  title: 'API 文档',
  path: '/api',
  name: 'api',
  component: require('components/api.vue'),
  children: [{
    title: 'router-link',
    path: 'router-link.html',
    name: 'routerLink',
    component: require('components/routerLink.vue')
  }, {
    title: 'router-view',
    path: 'arouter-view.html',
    name: 'routerView',
    component: require('components/routerView.vue')
  }, {
    title: '路由信息对象',
    path: 'route-object.html',
    name: 'routeObject',
    component: require('components/routeObject.vue')
  }, {
    title: 'Router 构造配置',
    path: 'options.html',
    name: 'options',
    component: require('components/options.vue')
  }, {
    title: 'Router 实例',
    path: 'router-instance.html',
    name: 'routerInstance',
    component: require('components/routerInstance.vue')
  }, {
    title: '对组件注入',
    path: 'component-injections.html',
    name: 'componentInjections',
    component: require('components/componentInjections.vue')
  }]
}]

Vue.use(Router)

let router = new Router({
  linkActiveClass: 'active',
  routes
})

export {
  routes,
  router
}
