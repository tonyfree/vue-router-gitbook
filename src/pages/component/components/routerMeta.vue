<template>
  <section class="normal markdown-section">

    <h1 id="路由元信息">路由元信息</h1>
    <p>定义路由的时候可以配置
      <code>meta</code> 字段：</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> VueRouter({
    routes: [
      {
        path: <span class="hljs-string">'/foo'</span>,
        component: Foo,
        children: [
          {
            path: <span class="hljs-string">'bar'</span>,
            component: Bar,
            <span class="hljs-comment">// a meta field</span>
            meta: { requiresAuth: <span class="hljs-literal">true</span> }
          }
        ]
      }
    ]
  })
  </code></pre>
    <p>那么如何访问这个
      <code>meta</code> 字段呢？</p>
    <p>首先，我们称呼
      <code>routes</code> 配置中的每个路由对象为
      <strong>路由记录</strong>。路由记录可以是嵌套的，因此，当一个路由匹配成功后，他可能匹配多个路由记录</p>
    <p>例如，根据上面的路由配置，
      <code>/foo/bar</code> 这个 URL 将会匹配父路由记录以及子路由记录。</p>
    <p>一个路由匹配到的所有路由记录会暴露为
      <code>$route</code> 对象（还有在导航钩子中的 route 对象）的
      <code>$route.matched</code> 数组。因此，我们需要遍历
      <code>$route.matched</code> 来检查路由记录中的
      <code>meta</code> 字段。</p>
    <p>下面例子展示在全局导航钩子中检查 meta 字段：</p>
    <pre><code class="lang-js">router.beforeEach((to, <span class="hljs-keyword">from</span>, next) =&gt; {
    <span class="hljs-keyword">if</span> (to.matched.some(record =&gt; record.meta.requiresAuth)) {
      <span class="hljs-comment">// this route requires auth, check if logged in</span>
      <span class="hljs-comment">// if not, redirect to login page.</span>
      <span class="hljs-keyword">if</span> (!auth.loggedIn()) {
        next({
          path: <span class="hljs-string">'/login'</span>,
          query: { redirect: to.fullPath }
        })
      } <span class="hljs-keyword">else</span> {
        next()
      }
    } <span class="hljs-keyword">else</span> {
      next() <span class="hljs-comment">// 确保一定要调用 next()</span>
    }
  })
  </code></pre>

  </section>
</template>
