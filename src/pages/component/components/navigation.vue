<template>
  <section class="normal markdown-section">

    <h1 id="编程式的导航">编程式的导航</h1>
    <p>除了使用
      <code>&lt;router-link&gt;</code> 创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，通过编写代码来实现。</p>
    <h4 id="routerpushlocation">
      <code>router.push(location)</code>
    </h4>
    <p>想要导航到不同的 URL，则使用
      <code>router.push</code> 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。</p>
    <p>当你点击
      <code>&lt;router-link&gt;</code> 时，这个方法会在内部调用，所以说，点击
      <code>&lt;router-link :to="..."&gt;</code> 等同于调用
      <code>router.push(...)</code>。</p>
    <table>
      <thead>
        <tr>
          <th>声明式</th>
          <th>编程式</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code>&lt;router-link :to="..."&gt;</code>
          </td>
          <td>
            <code>router.push(...)</code>
          </td>
        </tr>
      </tbody>
    </table>
    <p>该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如：</p>
    <pre><code class="lang-js"><span class="hljs-comment">// 字符串</span>
  router.push(<span class="hljs-string">'home'</span>)

  <span class="hljs-comment">// 对象</span>
  router.push({ path: <span class="hljs-string">'home'</span> })

  <span class="hljs-comment">// 命名的路由</span>
  router.push({ name: <span class="hljs-string">'user'</span>, params: { userId: <span class="hljs-number">123</span> }})

  <span class="hljs-comment">// 带查询参数，变成 /register?plan=private</span>
  router.push({ path: <span class="hljs-string">'register'</span>, query: { plan: <span class="hljs-string">'private'</span> }})
  </code></pre>
    <h4 id="routerreplacelocation">
      <code>router.replace(location)</code>
    </h4>
    <p>跟
      <code>router.push</code> 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。</p>
    <table>
      <thead>
        <tr>
          <th>声明式</th>
          <th>编程式</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code>&lt;router-link :to="..." replace&gt;</code>
          </td>
          <td>
            <code>router.replace(...)</code>
          </td>
        </tr>
      </tbody>
    </table>
    <h4 id="routergon">
      <code>router.go(n)</code>
    </h4>
    <p>这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似
      <code>window.history.go(n)</code>。</p>
    <p>例子</p>
    <pre><code class="lang-js"><span class="hljs-comment">// 在浏览器记录中前进一步，等同于 history.forward()</span>
  router.go(<span class="hljs-number">1</span>)

  <span class="hljs-comment">// 后退一步记录，等同于 history.back()</span>
  router.go(<span class="hljs-number">-1</span>)

  <span class="hljs-comment">// 前进 3 步记录</span>
  router.go(<span class="hljs-number">3</span>)

  <span class="hljs-comment">// 如果 history 记录不够用，那就默默地失败呗</span>
  router.go(<span class="hljs-number">-100</span>)
  router.go(<span class="hljs-number">100</span>)
  </code></pre>
    <h4 id="操作-history">操作 History</h4>
    <p>你也许注意到
      <code>router.push</code>、
      <code>router.replace</code> 和
      <code>router.go</code> 跟
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/History" target="_blank">
        <code>window.history.pushState</code>、
        <code>window.history.replaceState</code> 和
        <code>window.history.go</code>
      </a>好像， 实际上它们确实是效仿
      <code>window.history</code> API 的。</p>
    <p>因此，如果你已经熟悉
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/History_API" target="_blank">Browser History APIs</a>，那么在 vue-router 中操作 history 就是超级简单的。</p>
    <p>还有值得提及的，vue-router 的导航方法 （
      <code>push</code>、
      <code>replace</code>、
      <code>go</code>） 在各类路由模式（
      <code>history</code>、
      <code>hash</code> 和
      <code>abstract</code>）下表现一致。</p>

  </section>
</template>
