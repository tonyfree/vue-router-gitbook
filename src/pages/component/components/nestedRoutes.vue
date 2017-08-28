<template>
  <section class="normal markdown-section">

    <h1 id="嵌套路由">嵌套路由</h1>
    <p>实际生活中的应用界面，通常由多层嵌套的组件组合而成。同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件，例如：</p>
    <pre><code>/user/foo/profile                     /user/foo/posts
  +------------------+                  +-----------------+
  | User             |                  | User            |
  | +--------------+ |                  | +-------------+ |
  | | Profile      | |  +------------&gt;  | | Posts       | |
  | |              | |                  | |             | |
  | +--------------+ |                  | +-------------+ |
  +------------------+                  +-----------------+
  </code></pre>
    <p>借助
      <code>vue-router</code>，使用嵌套路由配置，就可以很简单地表达这种关系。</p>
    <p>接着上节创建的 app：</p>
    <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"app"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">router-view</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">router-view</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  </code></pre>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> User = {
    template: <span class="hljs-string">'&lt;div&gt;User { $route.params.id }}&lt;/div&gt;'</span>
  }

  <span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> VueRouter({
    routes: [
      { path: <span class="hljs-string">'/user/:id'</span>, component: User }
    ]
  })
  </code></pre>
    <p>这里的
      <code>&lt;router-view&gt;</code> 是最顶层的出口，渲染最高级路由匹配到的组件。同样地，一个被渲染组件同样可以包含自己的嵌套
      <code>&lt;router-view&gt;</code>。例如，在
      <code>User</code> 组件的模板添加一个
      <code>&lt;router-view&gt;</code>：</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> User = {
    template: <span class="hljs-string">`
      &lt;div class="user"&gt;
        &lt;h2&gt;User { $route.params.id }}&lt;/h2&gt;
        &lt;router-view&gt;&lt;/router-view&gt;
      &lt;/div&gt;
    `</span>
  }
  </code></pre>
    <p>要在嵌套的出口中渲染组件，需要在
      <code>VueRouter</code> 的参数中使用
      <code>children</code> 配置：</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> VueRouter({
    routes: [
      { path: <span class="hljs-string">'/user/:id'</span>, component: User,
        children: [
          {
            <span class="hljs-comment">// 当 /user/:id/profile 匹配成功，</span>
            <span class="hljs-comment">// UserProfile 会被渲染在 User 的 &lt;router-view&gt; 中</span>
            path: <span class="hljs-string">'profile'</span>,
            component: UserProfile
          },
          {
            <span class="hljs-comment">// 当 /user/:id/posts 匹配成功</span>
            <span class="hljs-comment">// UserPosts 会被渲染在 User 的 &lt;router-view&gt; 中</span>
            path: <span class="hljs-string">'posts'</span>,
            component: UserPosts
          }
        ]
      }
    ]
  })
  </code></pre>
    <p>
      <strong>要注意，以
        <code>/</code> 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。</strong>
    </p>
    <p>你会发现，
      <code>children</code> 配置就是像
      <code>routes</code> 配置一样的路由配置数组，所以呢，你可以嵌套多层路由。</p>
    <p>此时，基于上面的配置，当你访问
      <code>/user/foo</code> 时，
      <code>User</code> 的出口是不会渲染任何东西，这是因为没有匹配到合适的子路由。如果你想要渲染点什么，可以提供一个 空的 子路由：</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> VueRouter({
    routes: [
      {
        path: <span class="hljs-string">'/user/:id'</span>, component: User,
        children: [
          <span class="hljs-comment">// 当 /user/:id 匹配成功，</span>
          <span class="hljs-comment">// UserHome 会被渲染在 User 的 &lt;router-view&gt; 中</span>
          { path: <span class="hljs-string">''</span>, component: UserHome },

          <span class="hljs-comment">// ...其他子路由</span>
        ]
      }
    ]
  })
  </code></pre>
    <p>提供以上案例的可运行代码，
      <a href="http://jsfiddle.net/yyx990803/L7hscd8h/" target="_blank">戳这里</a>.</p>

  </section>
</template>
