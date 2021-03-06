<template>
  <section class="normal markdown-section">

    <h1 id="路由懒加载">路由懒加载</h1>
    <p>当打包构建应用时，Javascript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。</p>
    <p>结合 Vue 的
      <a href="http://vuejs.org/guide/components.html#Async-Components" target="_blank">异步组件</a> 和 Webpack 的
      <a href="https://doc.webpack-china.org//guides/code-splitting-async/#require-ensure-/" target="_blank">code splitting feature</a>, 轻松实现路由组件的懒加载。</p>
    <p>我们要做的就是把路由对应的组件定义成异步组件：</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> Foo = resolve =&gt; {
    <span class="hljs-comment">// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point</span>
    <span class="hljs-comment">// （代码分块）</span>
    <span class="hljs-built_in">require</span>.ensure([<span class="hljs-string">'./Foo.vue'</span>], () =&gt; {
      resolve(<span class="hljs-built_in">require</span>(<span class="hljs-string">'./Foo.vue'</span>))
    })
  }
  </code></pre>
    <p>这里还有另一种代码分块的语法，使用 AMD 风格的 require，于是就更简单了：</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> Foo = resolve =&gt; <span class="hljs-built_in">require</span>([<span class="hljs-string">'./Foo.vue'</span>], resolve)
  </code></pre>
    <p>不需要改变任何路由配置，跟之前一样使用
      <code>Foo</code>：</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> VueRouter({
    routes: [
      { path: <span class="hljs-string">'/foo'</span>, component: Foo }
    ]
  })
  </code></pre>
    <h3 id="把组件按组分块">把组件按组分块</h3>
    <p>有时候我们想把某个路由下的所有组件都打包在同个异步 chunk 中。只需要
      <a href="https://webpack.js.org/guides/code-splitting-require/#chunkname" target="_blank">给 chunk 命名</a>，提供
      <code>require.ensure</code> 第三个参数作为 chunk 的名称:</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> Foo = r =&gt; <span class="hljs-built_in">require</span>.ensure([], () =&gt; r(<span class="hljs-built_in">require</span>(<span class="hljs-string">'./Foo.vue'</span>)), <span class="hljs-string">'group-foo'</span>)
  <span class="hljs-keyword">const</span> Bar = r =&gt; <span class="hljs-built_in">require</span>.ensure([], () =&gt; r(<span class="hljs-built_in">require</span>(<span class="hljs-string">'./Bar.vue'</span>)), <span class="hljs-string">'group-foo'</span>)
  <span class="hljs-keyword">const</span> Baz = r =&gt; <span class="hljs-built_in">require</span>.ensure([], () =&gt; r(<span class="hljs-built_in">require</span>(<span class="hljs-string">'./Baz.vue'</span>)), <span class="hljs-string">'group-foo'</span>)
  </code></pre>
    <p>Webpack 将相同 chunk 下的所有异步模块打包到一个异步块里面 —— 这也意味着我们无须明确列出
      <code>require.ensure</code> 的依赖（传空数组就行）。</p>

  </section>
</template>
