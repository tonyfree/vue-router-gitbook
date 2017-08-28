<template>
  <section class="normal markdown-section">

    <h1 id="命名视图">命名视图</h1>
    <p>有时候想同时（同级）展示多个视图，而不是嵌套展示，例如创建一个布局，有
      <code>sidebar</code>（侧导航） 和
      <code>main</code>（主内容） 两个视图，这个时候命名视图就派上用场了。你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果
      <code>router-view</code> 没有设置名字，那么默认为
      <code>default</code>。</p>
    <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">router-view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"view one"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">router-view</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">router-view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"view two"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"a"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">router-view</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">router-view</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"view three"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"b"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">router-view</span>&gt;</span>
  </code></pre>
    <p>一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用
      <code>components</code> 配置（带上 s）：</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> VueRouter({
    routes: [
      {
        path: <span class="hljs-string">'/'</span>,
        components: {
          <span class="hljs-keyword">default</span>: Foo,
          a: Bar,
          b: Baz
        }
      }
    ]
  })
  </code></pre>
    <p>以上案例相关的可运行代码，在
      <a href="https://jsfiddle.net/posva/6du90epg/" target="_blank">这里</a>.</p>

  </section>
</template>
