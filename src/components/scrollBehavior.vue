<template>
  <section class="normal markdown-section">

    <h1 id="滚动行为">滚动行为</h1>
    <p>使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。
      <code>vue-router</code> 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。</p>
    <p>
      <strong>注意: 这个功能只在 HTML5 history 模式下可用。</strong>
    </p>
    <p>当创建一个 Router 实例，你可以提供一个
      <code>scrollBehavior</code> 方法：</p>
    <pre><code class="lang-js"><span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> VueRouter({
      routes: [...],
      scrollBehavior (to, <span class="hljs-keyword">from</span>, savedPosition) {
        <span class="hljs-comment">// return 期望滚动到哪个的位置</span>
      }
    })
    </code></pre>
    <p>
      <code>scrollBehavior</code> 方法接收
      <code>to</code> 和
      <code>from</code> 路由对象。第三个参数
      <code>savedPosition</code> 当且仅当
      <code>popstate</code> 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。</p>
    <p>这个方法返回滚动位置的对象信息，长这样：</p>
    <ul>
      <li>
        <code>{ x: number, y: number }</code>
      </li>
      <li>
        <code>{ selector: string }</code>
      </li>
    </ul>
    <p>如果返回一个布尔假的值，或者是一个空对象，那么不会发生滚动。</p>
    <p>举例：</p>
    <pre><code class="lang-js">scrollBehavior (to, <span class="hljs-keyword">from</span>, savedPosition) {
      <span class="hljs-keyword">return</span> { x: <span class="hljs-number">0</span>, y: <span class="hljs-number">0</span> }
    }
    </code></pre>
    <p>对于所有路由导航，简单地让页面滚动到顶部。</p>
    <p>返回
      <code>savedPosition</code>，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样：</p>
    <pre><code class="lang-js">scrollBehavior (to, <span class="hljs-keyword">from</span>, savedPosition) {
      <span class="hljs-keyword">if</span> (savedPosition) {
        <span class="hljs-keyword">return</span> savedPosition
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">return</span> { x: <span class="hljs-number">0</span>, y: <span class="hljs-number">0</span> }
      }
    }
    </code></pre>
    <p>如果你要模拟『滚动到锚点』的行为：</p>
    <pre><code class="lang-js">scrollBehavior (to, <span class="hljs-keyword">from</span>, savedPosition) {
      <span class="hljs-keyword">if</span> (to.hash) {
        <span class="hljs-keyword">return</span> {
          selector: to.hash
        }
      }
    }
    </code></pre>
    <p>我们还可以利用
      <a href="meta.html">路由元信息</a> 更细颗粒度地控制滚动。查看完整例子
      <a href="https://github.com/vuejs/vue-router/blob/next/examples/scroll-behavior/app.js" target="_blank">这里</a>.</p>

  </section>
</template>
