<template>
  <section class="normal markdown-section">

    <h1 id="对组件注入">对组件注入</h1>
    <h3 id="注入的属性">注入的属性</h3>
    <p>通过在 Vue 根实例的
      <code>router</code> 配置传入 router 实例，下面这些属性成员会被注入到每个子组件。</p>
    <ul>
      <li>
        <h4 id="router">$router</h4>
        <p>router 实例.</p>
      </li>
      <li>
        <h4 id="route">$route</h4>
        <p>当前激活的
          <a href="route-object.html">路由信息对象</a>。这个属性是只读的，里面的属性是 immutable（不可变） 的，不过你可以 watch（监测变化） 它。</p>
      </li>
    </ul>
    <h3 id="允许的额外配置">允许的额外配置</h3>
    <ul>
      <li>
        <strong>beforeRouteEnter</strong>
      </li>
      <li>
        <p>
          <strong>beforeRouteLeave</strong>
        </p>
        <p>查看
          <a href="../advanced/navigation-guards.html#incomponent-guards">组件级导航钩子</a>.</p>
      </li>
    </ul>

  </section>
</template>
