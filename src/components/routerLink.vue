<template>
  <section class="normal markdown-section">

    <h1 id="router-link">
      <code>&lt;router-link&gt;</code>
    </h1>
    <p>
      <code>&lt;router-link&gt;</code> 组件支持用户在具有路由功能的应用中（点击）导航。 通过
      <code>to</code> 属性指定目标地址，默认渲染成带有正确链接的
      <code>&lt;a&gt;</code> 标签，可以通过配置
      <code>tag</code> 属性生成别的标签.。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名。</p>
    <p>
      <code>&lt;router-link&gt;</code> 比起写死的
      <code>&lt;a href="..."&gt;</code> 会好一些，理由如下：</p>
    <ul>
      <li>
        <p>无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 降级使用 hash 模式，无须作任何变动。</p>
      </li>
      <li>
        <p>在 HTML5 history 模式下，
          <code>router-link</code> 会拦截点击事件，让浏览器不再重新加载页面。</p>
      </li>
      <li>
        <p>当你在 HTML5 history 模式下使用
          <code>base</code> 选项之后，所有的
          <code>to</code> 属性都不需要写（基路径）了。</p>
      </li>
    </ul>
    <h3 id="props">Props</h3>
    <ul>
      <li>
        <p>
          <strong>to</strong>
        </p>
        <ul>
          <li>
            <p>类型:
              <code>string | Location</code>
            </p>
          </li>
          <li>
            <p>required</p>
          </li>
        </ul>
        <p>表示目标路由的链接。当被点击后，内部会立刻把
          <code>to</code> 的值传到
          <code>router.push()</code>，所以这个值可以是一个字符串或者是描述目标位置的对象。</p>
        <pre><code class="lang-html"><span class="hljs-comment">&lt;!-- 字符串 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">router-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">"home"</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">router-link</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- 渲染结果 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"home"</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>

  <span class="hljs-comment">&lt;!-- 使用 v-bind 的 JS 表达式 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">router-link</span> <span class="hljs-attr">v-bind:to</span>=<span class="hljs-string">"'home'"</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">router-link</span>&gt;</span>

  <span class="hljs-comment">&lt;!-- 不写 v-bind 也可以，就像绑定别的属性一样 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">router-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"'home'"</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">router-link</span>&gt;</span>

  <span class="hljs-comment">&lt;!-- 同上 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">router-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"{ path: 'home' }"</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">router-link</span>&gt;</span>

  <span class="hljs-comment">&lt;!-- 命名的路由 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">router-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"{ name: 'user', params: { userId: 123 }}"</span>&gt;</span>User<span class="hljs-tag">&lt;/<span class="hljs-name">router-link</span>&gt;</span>

  <span class="hljs-comment">&lt;!-- 带查询参数，下面的结果为 /register?plan=private --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">router-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"{ path: 'register', query: { plan: 'private' }}"</span>&gt;</span>Register<span class="hljs-tag">&lt;/<span class="hljs-name">router-link</span>&gt;</span>
  </code></pre>
      </li>
      <li>
        <p>
          <strong>replace</strong>
        </p>
        <ul>
          <li>
            <p>类型:
              <code>boolean</code>
            </p>
          </li>
          <li>
            <p>默认值:
              <code>false</code>
            </p>
          </li>
        </ul>
        <p>设置
          <code>replace</code> 属性的话，当点击时，会调用
          <code>router.replace()</code> 而不是
          <code>router.push()</code>，于是导航后不会留下 history 记录。</p>
        <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">router-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"{ path: '/abc'}"</span> <span class="hljs-attr">replace</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">router-link</span>&gt;</span>
  </code></pre>
      </li>
      <li>
        <p>
          <strong>append</strong>
        </p>
        <ul>
          <li>
            <p>类型:
              <code>boolean</code>
            </p>
          </li>
          <li>
            <p>默认值:
              <code>false</code>
            </p>
          </li>
        </ul>
      </li>
    </ul>
    <p> 设置
      <code>append</code> 属性后，则在当前（相对）路径前添加基路径。例如，我们从
      <code>/a</code> 导航到一个相对路径
      <code>b</code>，如果没有配置
      <code>append</code>，则路径为
      <code>/b</code>，如果配了，则为
      <code>/a/b</code>
    </p>
    <pre><code class="lang-html">  <span class="hljs-tag">&lt;<span class="hljs-name">router-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"{ path: 'relative/path'}"</span> <span class="hljs-attr">append</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">router-link</span>&gt;</span>
  </code></pre>
    <ul>
      <li>
        <p>
          <strong>tag</strong>
        </p>
        <ul>
          <li>
            <p>类型:
              <code>string</code>
            </p>
          </li>
          <li>
            <p>默认值:
              <code>"a"</code>
            </p>
          </li>
        </ul>
        <p>有时候想要
          <code>&lt;router-link&gt;</code> 渲染成某种标签，例如
          <code>&lt;li&gt;</code>。 于是我们使用
          <code>tag</code> prop 类指定何种标签，同样它还是会监听点击，触发导航。</p>
        <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">router-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">"/foo"</span> <span class="hljs-attr">tag</span>=<span class="hljs-string">"li"</span>&gt;</span>foo<span class="hljs-tag">&lt;/<span class="hljs-name">router-link</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- 渲染结果 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>foo<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
  </code></pre>
      </li>
      <li>
        <p>
          <strong>active-class</strong>
        </p>
        <ul>
          <li>
            <p>类型:
              <code>string</code>
            </p>
          </li>
          <li>
            <p>默认值:
              <code>"router-link-active"</code>
            </p>
          </li>
        </ul>
        <p>设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项
          <code>linkActiveClass</code> 来全局配置。</p>
      </li>
      <li>
        <p>
          <strong>exact</strong>
        </p>
        <ul>
          <li>
            <p>类型:
              <code>boolean</code>
            </p>
          </li>
          <li>
            <p>默认值:
              <code>false</code>
            </p>
          </li>
        </ul>
        <p>"是否激活" 默认类名的依据是
          <strong>inclusive match</strong> （全包含匹配）。 举个例子，如果当前的路径是
          <code>/a</code> 开头的，那么
          <code>&lt;router-link to="/a"&gt;</code> 也会被设置 CSS 类名。</p>
      </li>
    </ul>
    <p> 按照这个规则，
      <code>&lt;router-link to="/"&gt;</code> 将会点亮各个路由！想要链接使用 "exact 匹配模式"，则使用
      <code>exact</code> 属性：</p>
    <pre><code class="lang-html">  <span class="hljs-comment">&lt;!-- 这个链接只会在地址为 / 的时候被激活 --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">router-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">"/"</span> <span class="hljs-attr">exact</span>&gt;</span>
  </code></pre>
    <p> 查看更多关于激活链接类名的例子
      <a href="https://jsfiddle.net/8xrk1n9f/" target="_blank">可运行</a>.</p>
    <ul>
      <li>
        <p>
          <strong>events</strong>
        </p>
        <blockquote>
          <p>2.1.0+</p>
        </blockquote>
        <ul>
          <li>
            <p>类型:
              <code>string | Array&lt;string&gt;</code>
            </p>
          </li>
          <li>
            <p>默认值:
              <code>'click'</code>
            </p>
          </li>
        </ul>
        <p>声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组。</p>
      </li>
    </ul>
    <h3 id="将激活时的css类名应用在外层元素">将"激活时的CSS类名"应用在外层元素</h3>
    <p>有时候我们要让 "激活时的CSS类名" 应用在外层元素，而不是
      <code>&lt;a&gt;</code> 标签本身，那么可以用
      <code>&lt;router-link&gt;</code> 渲染外层元素，包裹着内层的原生
      <code>&lt;a&gt;</code> 标签：</p>
    <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">router-link</span> <span class="hljs-attr">tag</span>=<span class="hljs-string">"li"</span> <span class="hljs-attr">to</span>=<span class="hljs-string">"/foo"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span>/foo<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">router-link</span>&gt;</span>
  </code></pre>
    <p>在这种情况下，
      <code>&lt;a&gt;</code> 将作为真实的链接（它会获得正确的
      <code>href</code> 的），而 "激活时的CSS类名" 则设置到外层的
      <code>&lt;li&gt;</code>。</p>

  </section>
</template>
