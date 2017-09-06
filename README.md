# vue-router-gitbook
用vue、vue-router重构vue-router文档


## 重构方式
+ html template
+ vue component
+ vue component + vue-router

## 参考文档
+ [vue-router中文文档](https://router.vuejs.org/zh-cn/)
+ [内置组件component](https://cn.vuejs.org/v2/api/#component)
+ [history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
+ [location API](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
+ [HashChangeEvent](https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent)

## 小结
+ 如果需要焦点状态，router-link的属性to对应的值不能为空，需要通过to来定位焦点状态  

+ 需要焦点状态的路由切换有两种方式  
router-link：Router构造设置 linkActiveClass  
编程式导航：通过this.$route.name或者this.$route.fullPath来对应的当前name或者path   

+ 编程式导航和router-link同时存在时，触发顺序是：router-link的to导航 ==> 编程式导航  

+ router-link事件处理，简单的事件直接写js代码，复杂的业务处理需要定义事件处理器，此时需要.native修饰符，否则无法调用事件处理器  

+  对象类型数据的传递：this.$route.query、bus 、vuex，最简洁的方式就是this.$route.query，但是如果需要刷新后数据还在需要用sessionStorage,通过url打开页面获取的数据，只能是通过this.$route.query传递的string、number、boolean类型，对象类型无法获取  
 
