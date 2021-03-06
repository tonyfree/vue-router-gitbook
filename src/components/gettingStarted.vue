<template>
  <section class="normal markdown-section">

    <h1 id="getting-started">Getting Started</h1>
    <blockquote>
      <p>教程中的案例代码将使用
        <a href="https://github.com/lukehoban/es6features" target="_blank">ES2015</a> 来编写。</p>
    </blockquote>
    <p>用 Vue.js + vue-router 创建单页应用，是非常简单的。使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，当你要把 vue-router 添加进来，我们需要做的是，将组件(components)映射到路由(routes)，然后告诉 vue-router 在哪里渲染它们。下面是个基本例子：</p>
    <h3 id="html">HTML</h3>
    <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://unpkg.com/vue/dist/vue.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://unpkg.com/vue-router/dist/vue-router.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"app"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hello App!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-comment">&lt;!-- 使用 router-link 组件来导航. --&gt;</span>
      <span class="hljs-comment">&lt;!-- 通过传入 `to` 属性指定链接. --&gt;</span>
      <span class="hljs-comment">&lt;!-- &lt;router-link&gt; 默认会被渲染成一个 `&lt;a&gt;` 标签 --&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">router-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">"/foo"</span>&gt;</span>Go to Foo<span class="hljs-tag">&lt;/<span class="hljs-name">router-link</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">router-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">"/bar"</span>&gt;</span>Go to Bar<span class="hljs-tag">&lt;/<span class="hljs-name">router-link</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- 路由出口 --&gt;</span>
    <span class="hljs-comment">&lt;!-- 路由匹配到的组件将渲染在这里 --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">router-view</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">router-view</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  </code></pre>
    <h3 id="javascript">JavaScript</h3>
    <pre><code class="lang-js"><span class="hljs-comment">// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)</span>

  <span class="hljs-comment">// 1. 定义（路由）组件。</span>
  <span class="hljs-comment">// 可以从其他文件 import 进来</span>
  <span class="hljs-keyword">const</span> Foo = { template: <span class="hljs-string">'&lt;div&gt;foo&lt;/div&gt;'</span> }
  <span class="hljs-keyword">const</span> Bar = { template: <span class="hljs-string">'&lt;div&gt;bar&lt;/div&gt;'</span> }

  <span class="hljs-comment">// 2. 定义路由</span>
  <span class="hljs-comment">// 每个路由应该映射一个组件。 其中"component" 可以是</span>
  <span class="hljs-comment">// 通过 Vue.extend() 创建的组件构造器，</span>
  <span class="hljs-comment">// 或者，只是一个组件配置对象。</span>
  <span class="hljs-comment">// 我们晚点再讨论嵌套路由。</span>
  <span class="hljs-keyword">const</span> routes = [
    { path: <span class="hljs-string">'/foo'</span>, component: Foo },
    { path: <span class="hljs-string">'/bar'</span>, component: Bar }
  ]

  <span class="hljs-comment">// 3. 创建 router 实例，然后传 `routes` 配置</span>
  <span class="hljs-comment">// 你还可以传别的配置参数, 不过先这么简单着吧。</span>
  <span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> VueRouter({
    routes <span class="hljs-comment">// （缩写）相当于 routes: routes</span>
  })

  <span class="hljs-comment">// 4. 创建和挂载根实例。</span>
  <span class="hljs-comment">// 记得要通过 router 配置参数注入路由，</span>
  <span class="hljs-comment">// 从而让整个应用都有路由功能</span>
  <span class="hljs-keyword">const</span> app = <span class="hljs-keyword">new</span> Vue({
    router
  }).$mount(<span class="hljs-string">'#app'</span>)

  <span class="hljs-comment">// 现在，应用已经启动了！</span>
  </code></pre>
    <p>你可以看看这个例子
      <a href="http://jsfiddle.net/yyx990803/xgrjzsup/" target="_blank">live</a>。</p>
    <p>要注意，当
      <code>&lt;router-link&gt;</code> 对应的路由匹配成功，将自动设置 class 属性值
      <code>.router-link-active</code>。查看
      <a href="../api/router-link.html">API 文档</a> 学习更多相关内容。</p>

  </section>
</template>
