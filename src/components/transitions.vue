<template>
  <section class="normal markdown-section">

    <h1 id="过渡动效">过渡动效</h1>
    <p>
      <code>&lt;router-view&gt;</code> 是基本的动态组件，所以我们可以用
      <code>&lt;transition&gt;</code> 组件给它添加一些过渡效果：</p>
    <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">transition</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">router-view</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">router-view</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>
  </code></pre>
    <p>
      <a href="http://vuejs.org/guide/transitions.html" target="_blank">
        <code>&lt;transition&gt;</code> 的所有功能</a> 在这里同样适用。</p>
    <h3 id="单个路由的过渡">单个路由的过渡</h3>
    <p>上面的用法会给所有路由设置一样的过渡效果，如果你想让每个路由组件有各自的过渡效果，可以在各路由组件内使用
      <code>&lt;transition&gt;</code> 并设置不同的 name。</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> Foo = {
    template: <span class="hljs-string">`
      &lt;transition name="slide"&gt;
        &lt;div class="foo"&gt;...&lt;/div&gt;
      &lt;/transition&gt;
    `</span>
  }

  <span class="hljs-keyword">const</span> Bar = {
    template: <span class="hljs-string">`
      &lt;transition name="fade"&gt;
        &lt;div class="bar"&gt;...&lt;/div&gt;
      &lt;/transition&gt;
    `</span>
  }
  </code></pre>
    <h3 id="基于路由的动态过渡">基于路由的动态过渡</h3>
    <p>还可以基于当前路由与目标路由的变化关系，动态设置过渡效果：</p>
    <pre><code class="lang-html"><span class="hljs-comment">&lt;!-- 使用动态的 transition name --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">"transitionName"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">router-view</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">router-view</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>
  </code></pre>
    <pre><code class="lang-js"><span class="hljs-comment">// 接着在父组件内</span>
  <span class="hljs-comment">// watch $route 决定使用哪种过渡</span>
  watch: {
    <span class="hljs-string">'$route'</span> (to, <span class="hljs-keyword">from</span>) {
      <span class="hljs-keyword">const</span> toDepth = to.path.split(<span class="hljs-string">'/'</span>).length
      <span class="hljs-keyword">const</span> fromDepth = <span class="hljs-keyword">from</span>.path.split(<span class="hljs-string">'/'</span>).length
      <span class="hljs-keyword">this</span>.transitionName = toDepth &lt; fromDepth ? <span class="hljs-string">'slide-right'</span> : <span class="hljs-string">'slide-left'</span>
    }
  }
  </code></pre>
    <p>查看完整例子
      <a href="https://github.com/vuejs/vue-router/blob/next/examples/transitions/app.js" target="_blank">这里</a>.</p>

  </section>
</template>
