<template>
  <section class="normal markdown-section">

    <h1 id="路由信息对象">路由信息对象</h1>
    <p>一个
      <strong>route object（路由信息对象）</strong> 表示当前激活的路由的状态信息，包含了当前 URL 解析得到的信息，还有 URL 匹配到的
      <strong>route records（路由记录）</strong>。</p>
    <p>route object 是 immutable（不可变） 的，每次成功的导航后都会产生一个新的对象。</p>
    <p>route object 出现在多个地方:</p>
    <ul>
      <li>
        <p>组件内的
          <code>this.$route</code> 和
          <code>$route</code> watcher 回调（监测变化处理）;</p>
      </li>
      <li>
        <p>
          <code>router.match(location)</code> 的返回值</p>
      </li>
      <li>
        <p>导航钩子的参数：</p>
        <pre><code class="lang-js">router.beforeEach((to, <span class="hljs-keyword">from</span>, next) =&gt; {
    <span class="hljs-comment">// to 和 from 都是 路由信息对象</span>
  })
  </code></pre>
      </li>
      <li>
        <p>
          <code>scrollBehavior</code> 方法的参数:</p>
        <pre><code class="lang-js"><span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> VueRouter({
    scrollBehavior (to, <span class="hljs-keyword">from</span>, savedPosition) {
      <span class="hljs-comment">// to 和 from 都是 路由信息对象</span>
    }
  })
  </code></pre>
      </li>
    </ul>
    <h3 id="路由信息对象的属性">路由信息对象的属性</h3>
    <ul>
      <li>
        <p>
          <strong>$route.path</strong>
        </p>
        <ul>
          <li>
            <p>类型:
              <code>string</code>
            </p>
            <p>字符串，对应当前路由的路径，总是解析为绝对路径，如
              <code>"/foo/bar"</code>。</p>
          </li>
        </ul>
      </li>
      <li>
        <p>
          <strong>$route.params</strong>
        </p>
        <ul>
          <li>类型:
            <code>Object</code>
          </li>
        </ul>
        <p>一个 key/value 对象，包含了 动态片段 和 全匹配片段，如果没有路由参数，就是一个空对象。</p>
      </li>
      <li>
        <p>
          <strong>$route.query</strong>
        </p>
        <ul>
          <li>
            <p>类型:
              <code>Object</code>
            </p>
            <p>一个 key/value 对象，表示 URL 查询参数。例如，对于路径
              <code>/foo?user=1</code>，则有
              <code>$route.query.user == 1</code>，如果没有查询参数，则是个空对象。</p>
          </li>
        </ul>
      </li>
      <li>
        <p>
          <strong>$route.hash</strong>
        </p>
        <ul>
          <li>
            <p>类型:
              <code>string</code>
            </p>
            <p>当前路由的 hash 值 (带
              <code>#</code>) ，如果没有 hash 值，则为空字符串。</p>
          </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        <p>
          <strong>$route.fullPath</strong>
        </p>
        <ul>
          <li>
            <p>类型:
              <code>string</code>
            </p>
            <p>完成解析后的 URL，包含查询参数和 hash 的完整路径。</p>
          </li>
        </ul>
      </li>
      <li>
        <p>
          <strong>$route.matched</strong>
        </p>
        <ul>
          <li>类型:
            <code>Array&lt;RouteRecord&gt;</code>
          </li>
        </ul>
        <p>一个数组，包含当前路由的所有嵌套路径片段的
          <strong>路由记录</strong> 。路由记录就是
          <code>routes</code> 配置数组中的对象副本（还有在
          <code>children</code> 数组）。</p>
        <pre><code class="lang-js"><span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> VueRouter({
    routes: [
      <span class="hljs-comment">// 下面的对象就是 route record</span>
      { path: <span class="hljs-string">'/foo'</span>, component: Foo,
        children: [
          <span class="hljs-comment">// 这也是个 route record</span>
          { path: <span class="hljs-string">'bar'</span>, component: Bar }
        ]
      }
    ]
  })
  </code></pre>
        <p>当 URL 为
          <code>/foo/bar</code>，
          <code>$route.matched</code> 将会是一个包含从上到下的所有对象（副本）。</p>
      </li>
      <li>
        <p>
          <strong>$route.name</strong>
        </p>
        <p>当前路由的名称，如果有的话。（查看
          <a href="../essentials/named-routes.html">命名路由</a>）</p>
      </li>
    </ul>

  </section>
</template>
