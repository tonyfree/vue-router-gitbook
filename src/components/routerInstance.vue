<template>
  <section class="normal markdown-section">

    <h1 id="router-实例">Router 实例</h1>
    <h3 id="属性">属性</h3>
    <h4 id="routerapp">router.app</h4>
    <ul>
      <li>
        <p>类型:
          <code>Vue instance</code>
        </p>
        <p>配置了
          <code>router</code> 的 Vue 根实例。</p>
      </li>
    </ul>
    <h4 id="routermode">router.mode</h4>
    <ul>
      <li>
        <p>类型:
          <code>string</code>
        </p>
        <p>路由使用的
          <a href="options.html#mode">模式</a>。</p>
      </li>
    </ul>
    <h4 id="routercurrentroute">router.currentRoute</h4>
    <ul>
      <li>
        <p>类型:
          <code>Route</code>
        </p>
        <p>当前路由对应的
          <a href="route-object.html">路由信息对象</a>.</p>
      </li>
    </ul>
    <h3 id="方法">方法</h3>
    <ul>
      <li>
        <strong>router.beforeEach(guard)</strong>
      </li>
      <li>
        <p>
          <strong>router.afterEach(hook)</strong>
        </p>
        <p>增加全局的导航钩子。参考
          <a href="../advanced/navigation-guards.html">导航钩子</a>.</p>
      </li>
    </ul>
    <ul>
      <li>
        <strong>router.push(location)</strong>
      </li>
      <li>
        <strong>router.replace(location)</strong>
      </li>
      <li>
        <strong>router.go(n)</strong>
      </li>
      <li>
        <strong>router.back()</strong>
      </li>
      <li>
        <p>
          <strong>router.forward()</strong>
        </p>
        <p>动态的导航到一个新 url。参考
          <a href="../essentials/navigation.html">编程式导航</a>.</p>
      </li>
      <li>
        <p>
          <strong>router.getMatchedComponents(location?)</strong>
        </p>
        <p>返回目标位置或是当前路由匹配的组件数组（是数组的定义/构造类，不是实例）。通常在服务端渲染的数据预加载时时候。</p>
      </li>
      <li>
        <p>
          <strong>router.resolve(location, current?, append?)</strong>
        </p>
        <blockquote>
          <p>2.1.0+</p>
        </blockquote>
        <p>解析目标位置（格式和
          <code>&lt;router-link&gt;</code> 的
          <code>to</code> prop 一样），返回包含如下属性的对象：</p>
        <pre><code class="lang-js">{
    location: Location;
    route: Route;
    href: string;
  }
  </code></pre>
      </li>
      <li>
        <p>
          <strong>router.addRoutes(routes)</strong>
        </p>
        <blockquote>
          <p>2.2.0+</p>
        </blockquote>
        <p>动态添加更多的路由规则。参数必须是一个符合
          <code>routes</code> 选项要求的数组。</p>
      </li>
      <li>
        <p>
          <strong>router.onReady(callback)</strong>
        </p>
        <blockquote>
          <p>2.2.0+</p>
        </blockquote>
        <p>添加一个会在第一次路由跳转完成时被调用的回调函数。此方法通常用于等待异步的导航钩子完成，比如在进行服务端渲染的时候。</p>
      </li>
    </ul>

  </section>
</template>
