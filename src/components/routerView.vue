<template>
  <section class="normal markdown-section">

    <h1 id="router-view">
      <code>&lt;router-view&gt;</code>
    </h1>
    <p>
      <code>&lt;router-view&gt;</code> 组件是一个 functional 组件，渲染路径匹配到的视图组件。
      <code>&lt;router-view&gt;</code> 渲染的组件还可以内嵌自己的
      <code>&lt;router-view&gt;</code>，根据嵌套路径，渲染嵌套组件。</p>
    <h3 id="属性">属性</h3>
    <ul>
      <li>
        <p>
          <strong>name</strong>
        </p>
        <ul>
          <li>
            <p>类型:
              <code>string</code>
            </p>
          </li>
          <li>
            <p>默认值:
              <code>"default"</code>
            </p>
          </li>
        </ul>
      </li>
    </ul>
    <p>如果
      <code>&lt;router-view&gt;</code>设置了名称，则会渲染对应的路由配置中
      <code>components</code> 下的相应组件。查看
      <a href="../essentials/named-views.html">命名视图</a> 中的例子。</p>
    <h3 id="行为表现">行为表现</h3>
    <p>其他属性（非 router-view 使用的属性）都直接传给渲染的组件， 很多时候，每个路由的数据都是包含在路由参数中。
    </p>
    <p>因为它也是个组件，所以可以配合
      <code>&lt;transition&gt;</code> 和
      <code>&lt;keep-alive&gt;</code> 使用。如果两个结合一起用，要确保在内层使用
      <code>&lt;keep-alive&gt;</code>：</p>
    <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">transition</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">keep-alive</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">router-view</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">router-view</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">keep-alive</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>
  </code></pre>

  </section>
</template>
