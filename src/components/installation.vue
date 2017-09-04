<template>
  <section class="normal markdown-section">

    <h1 id="安装">安装</h1>
    <h3 id="直接下载--cdn">直接下载 / CDN</h3>
    <p>
      <a href="https://unpkg.com/vue-router/dist/vue-router.js" target="_blank">https://unpkg.com/vue-router/dist/vue-router.js</a>
    </p>
    <!--email_off-->
    <p>
      <a href="https://unpkg.com" target="_blank">Unpkg.com</a> 提供了基于 NPM 的 CDN 链接。上面的链接会一直指向在 NPM 发布的最新版本。你也可以像
      <code>https://unpkg.com/vue-router@2.0.0/dist/vue-router.js</code> 这样指定 版本号 或者 Tag。
      <!--/email_off-->
    </p>
    <p>在 Vue 后面加载
      <code>vue-router</code>，它会自动安装的：</p>
    <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"/path/to/vue.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"/path/to/vue-router.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  </code></pre>
    <h3 id="npm">NPM</h3>
    <pre><code class="lang-bash">npm install vue-router
  </code></pre>
    <p>如果在一个模块化工程中使用它，必须要通过
      <code>Vue.use()</code> 明确地安装路由功能：</p>
    <pre><code class="lang-js"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>
  <span class="hljs-keyword">import</span> VueRouter <span class="hljs-keyword">from</span> <span class="hljs-string">'vue-router'</span>

  Vue.use(VueRouter)
  </code></pre>
    <p>如果使用全局的 script 标签，则无须如此（手动安装）。</p>
    <h3 id="构建开发版">构建开发版</h3>
    <p>如果你想使用最新的开发版，就得从 GitHub 上直接 clone，然后自己 build 一个
      <code>vue-router</code>。</p>
    <pre><code class="lang-bash">git <span class="hljs-built_in">clone</span> https://github.com/vuejs/vue-router.git node_modules/vue-router
  <span class="hljs-built_in">cd</span> node_modules/vue-router
  npm install
  npm run build
  </code></pre>

  </section>
</template>

<script>
  import bus from 'js/bus.js'
  export default {
    created() {
      console.log("==========  installation  ==========")
      bus.$on('bus', (obj) => {
        console.log(obj)
      })
    }
  }
</script>
