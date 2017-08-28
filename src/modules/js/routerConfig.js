let routes = [{
  title: 'Introduction',
  path: '',
  name: 'introduction'
}, {
  title: '安装',
  path: 'installation.html',
  name: 'installation'
}, {
  title: '基础',
  children: [{
    title: '开始',
    path: 'essentials/getting-started.html',
    name: 'gettingStarted'
  }, {
    title: '动态路由匹配',
    path: 'essentials/dynamic-matching.html',
    name: 'dynamicMatching'
  }, {
    title: '嵌套路由',
    path: 'essentials/nested-routes.html',
    name: 'nestedRoutes'
  }, {
    title: '编程式导航',
    path: 'essentials/navigation.html',
    name: 'navigation'
  }, {
    title: '命名路由',
    path: 'essentials/named-routes.html',
    name: 'namedRoutes'
  }, {
    title: '命名视图',
    path: 'essentials/named-views.html',
    name: 'namedViews'
  }, {
    title: '重定向 和 别名',
    path: 'essentials/redirect-and-alias.html',
    name: 'redirectAndAlias'
  }, {
    title: 'HTML5 History 模式',
    path: 'essentials/history-mode.html',
    name: 'historyMode'
  }]
},{
  title: '进阶',
  children: [{
    title: '导航钩子',
    path: 'advanced/navigation-guards.html',
    name: 'navigationGuards'
  }, {
    title: '路由元信息',
    path: 'advanced/meta.html',
    name: 'routerMeta'
  }, {
    title: '过渡动效',
    path: 'advanced/transitions.html',
    name: 'transitions'
  }, {
    title: '数据获取',
    path: 'advanced/data-fetching.html',
    name: 'dataFetching'
  }, {
    title: '滚动行为',
    path: 'advanced/scroll-behavior.html',
    name: 'scrollBehavior'
  }, {
    title: '懒加载',
    path: 'advanced/lazy-loading.html',
    name: 'lazyLoading'
  }]
},{
  title: 'API 文档',
  children: [{
    title: 'router-link',
    path: 'api/router-link.html',
    name: 'routerLink'
  }, {
    title: 'router-view',
    path: 'aapi/router-view.html',
    name: 'routerView'
  }, {
    title: '路由信息对象',
    path: 'api/route-object.html',
    name: 'routeObject'
  }, {
    title: 'Router 构造配置',
    path: 'api/options.html',
    name: 'options'
  }, {
    title: 'Router 实例',
    path: 'api/router-instance.html',
    name: 'routerInstance'
  }, {
    title: '对组件注入',
    path: 'api/component-injections.html',
    name: 'componentInjections'
  }]
}]

export default routes
