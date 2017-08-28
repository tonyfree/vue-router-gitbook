<template>
  <section class="normal markdown-section">

    <h1 id="重定向-和-别名">重定向 和 别名</h1>
    <h3 id="重定向">重定向</h3>
    <p>重定向也是通过
      <code>routes</code> 配置来完成，下面例子是从
      <code>/a</code> 重定向到
      <code>/b</code>：</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> VueRouter({
    routes: [
      { path: <span class="hljs-string">'/a'</span>, redirect: <span class="hljs-string">'/b'</span> }
    ]
  })
  </code></pre>
    <p>重定向的目标也可以是一个命名的路由：</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> VueRouter({
    routes: [
      { path: <span class="hljs-string">'/a'</span>, redirect: { name: <span class="hljs-string">'foo'</span> }}
    ]
  })
  </code></pre>
    <p>甚至是一个方法，动态返回重定向目标：</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> VueRouter({
    routes: [
      { path: <span class="hljs-string">'/a'</span>, redirect: to =&gt; {
        <span class="hljs-comment">// 方法接收 目标路由 作为参数</span>
        <span class="hljs-comment">// return 重定向的 字符串路径/路径对象</span>
      }}
    ]
  })
  </code></pre>
    <p>其它高级用法，请参考
      <a href="https://github.com/vuejs/vue-router/blob/next/examples/redirect/app.js" target="_blank">例子</a>.</p>
    <h3 id="别名">别名</h3>
    <p>『重定向』的意思是，当用户访问
      <code>/a</code>时，URL 将会被替换成
      <code>/b</code>，然后匹配路由为
      <code>/b</code>，那么『别名』又是什么呢？</p>
    <p>
      <strong>
        <code>/a</code> 的别名是
        <code>/b</code>，意味着，当用户访问
        <code>/b</code> 时，URL 会保持为
        <code>/b</code>，但是路由匹配则为
        <code>/a</code>，就像用户访问
        <code>/a</code> 一样。</strong>
    </p>
    <p>上面对应的路由配置为：</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> VueRouter({
    routes: [
      { path: <span class="hljs-string">'/a'</span>, component: A, alias: <span class="hljs-string">'/b'</span> }
    ]
  })
  </code></pre>
    <p>『别名』的功能让你可以自由地将 UI 结构映射到任意的 URL，而不是受限于配置的嵌套路由结构。</p>
    <p>更多高级用法，请查看
      <a href="https://github.com/vuejs/vue-router/blob/next/examples/route-alias/app.js" target="_blank">例子</a>.</p>

  </section>
</template>
