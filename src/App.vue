<template>
  <div id="app" style="font-size: 40px;">
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
.big-size {
  font-size: 120px;
  font-weight: bold;
}
.beautify-input {
  display: inline-block;
  margin: 10px;
  width: 100%;
  height: 32px;
  line-height: 1.5;
  padding: 20px 24px;
  font-size: 60px;
  border: 1px solid #dcdee2;
  border-radius: 4px;
  color: #515a6e;
  background-color: #fff;
  background-image: none;
  position: relative;
  cursor: text;
  transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
}
.beautify-button {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
  color: #515a6e;
  background-color: #fff;
  border-color: #dcdee2;
  color: #fff;
  background-color: #2d8cf0;
  border-color: #2d8cf0;
  outline: none;
}
.router-link a{
     margin:20px;
 }
</style>
