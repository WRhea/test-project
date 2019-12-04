<template>
  <div id="app">
    <div class="router-link">
    <router-link to="/template">模板语法</router-link>
    <router-link to="/model">v-model双向绑定</router-link>
    <router-link to="/cycle">循环</router-link>
    <router-link to="/select">条件渲染</router-link>
    <router-link to="/event">事件处理</router-link>
    <router-link to="/comp">组件化</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style >
 .router-link a{
     margin:20px;
 }
</style>
