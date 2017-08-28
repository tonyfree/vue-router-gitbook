<template>
  <section class="normal markdown-section">

    <h1 id="数据获取">数据获取</h1>
    <p>有时候，进入某个路由后，需要从服务器获取数据。例如，在渲染用户信息时，你需要从服务器获取用户的数据。我们可以通过两种方式来实现：</p>
    <ul>
      <li>
        <p>
          <strong>导航完成之后获取</strong>：先完成导航，然后在接下来的组件生命周期钩子中获取数据。在数据获取期间显示『加载中』之类的指示。</p>
      </li>
      <li>
        <p>
          <strong>导航完成之前获取</strong>：导航完成前，在路由的
          <code>enter</code> 钩子中获取数据，在数据获取成功后执行导航。</p>
      </li>
    </ul>
    <p>从技术角度讲，两种方式都不错 —— 就看你想要的用户体验是哪种。</p>
    <h2 id="导航完成后获取数据">导航完成后获取数据</h2>
    <p>当你使用这种方式时，我们会马上导航和渲染组件，然后在组件的
      <code>created</code> 钩子中获取数据。这让我们有机会在数据获取期间展示一个 loading 状态，还可以在不同视图间展示不同的 loading 状态。</p>
    <p>假设我们有一个
      <code>Post</code> 组件，需要基于
      <code>$route.params.id</code> 获取文章数据：</p>
    <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"post"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"loading"</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">"loading"</span>&gt;</span>
        Loading...
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">"error"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"error"</span>&gt;</span>
        { error }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">"post"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"content"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>{ post.title }}<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{ post.body }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  </code></pre>
    <pre><code class="lang-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        loading: <span class="hljs-literal">false</span>,
        post: <span class="hljs-literal">null</span>,
        error: <span class="hljs-literal">null</span>
      }
    },
    created () {
      <span class="hljs-comment">// 组件创建完后获取数据，</span>
      <span class="hljs-comment">// 此时 data 已经被 observed 了</span>
      <span class="hljs-keyword">this</span>.fetchData()
    },
    watch: {
      <span class="hljs-comment">// 如果路由有变化，会再次执行该方法</span>
      <span class="hljs-string">'$route'</span>: <span class="hljs-string">'fetchData'</span>
    },
    methods: {
      fetchData () {
        <span class="hljs-keyword">this</span>.error = <span class="hljs-keyword">this</span>.post = <span class="hljs-literal">null</span>
        <span class="hljs-keyword">this</span>.loading = <span class="hljs-literal">true</span>
        <span class="hljs-comment">// replace getPost with your data fetching util / API wrapper</span>
        getPost(<span class="hljs-keyword">this</span>.$route.params.id, (err, post) =&gt; {
          <span class="hljs-keyword">this</span>.loading = <span class="hljs-literal">false</span>
          <span class="hljs-keyword">if</span> (err) {
            <span class="hljs-keyword">this</span>.error = err.toString()
          } <span class="hljs-keyword">else</span> {
            <span class="hljs-keyword">this</span>.post = post
          }
        })
      }
    }
  }
  </code></pre>
    <h2 id="在导航完成前获取数据">在导航完成前获取数据</h2>
    <p>通过这种方式，我们在导航转入新的路由前获取数据。我们可以在接下来的组件的
      <code>beforeRouteEnter</code> 钩子中获取数据，当数据获取成功后只调用
      <code>next</code> 方法。</p>
    <pre><code class="lang-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        post: <span class="hljs-literal">null</span>,
        error: <span class="hljs-literal">null</span>
      }
    },
    beforeRouteEnter (to, <span class="hljs-keyword">from</span>, next) {
      getPost(to.params.id, (err, post) =&gt; 
        <span class="hljs-keyword">if</span> (err) {
          <span class="hljs-comment">// display some global error message</span>
          next(<span class="hljs-literal">false</span>)
        } <span class="hljs-keyword">else</span> {
          next(vm =&gt; {
            vm.post = post
          })
        }
      })
    },
    <span class="hljs-comment">// 路由改变前，组件就已经渲染完了</span>
    <span class="hljs-comment">// 逻辑稍稍不同</span>
    watch: {
      $route () {
        <span class="hljs-keyword">this</span>.post = <span class="hljs-literal">null</span>
        getPost(<span class="hljs-keyword">this</span>.$route.params.id, (err, post) =&gt; {
          <span class="hljs-keyword">if</span> (err) {
            <span class="hljs-keyword">this</span>.error = err.toString()
          } <span class="hljs-keyword">else</span> {
            <span class="hljs-keyword">this</span>.post = post
          }
        })
      }
    }
  }
  </code></pre>
    <p>在为后面的视图获取数据时，用户会停留在当前的界面，因此建议在数据获取期间，显示一些进度条或者别的指示。如果数据获取失败，同样有必要展示一些全局的错误提醒。</p>

  </section>
</template>
