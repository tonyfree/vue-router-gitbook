<template>
  <section class="normal markdown-section">

    <h1 id="命名路由">命名路由</h1>
    <p>有时候，通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候。你可以在创建 Router 实例的时候，在
      <code>routes</code> 配置中给某个路由设置名称。</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> VueRouter({
    routes: [
      {
        path: <span class="hljs-string">'/user/:userId'</span>,
        name: <span class="hljs-string">'user'</span>,
        component: User
      }
    ]
  })
  </code></pre>
    <p>要链接到一个命名路由，可以给
      <code>router-link</code> 的
      <code>to</code> 属性传一个对象：</p>
    <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">router-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"{ name: 'user', params: { userId: 123 }}"</span>&gt;</span>User<span class="hljs-tag">&lt;/<span class="hljs-name">router-link</span>&gt;</span>
  </code></pre>
    <p>这跟代码调用
      <code>router.push()</code> 是一回事：</p>
    <pre><code class="lang-js">router.push({ name: <span class="hljs-string">'user'</span>, params: { userId: <span class="hljs-number">123</span> }})
  </code></pre>
    <p>这两种方式都会把路由导航到
      <code>/user/123</code> 路径。</p>
    <p>完整的例子请
      <a href="https://github.com/vuejs/vue-router/blob/next/examples/named-routes/app.js" target="_blank">戳这里</a>.</p>

  </section>
</template>