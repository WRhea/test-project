<template>
  <div>
    <div class="label">{{value}}</div>
    <input v-model="value"/>
  </div>
</template>

<script>
export default {
  name: 'model',
  data () {
    return {
      value: 'hello'
    }
  }

}
</script>

<style>

</style>
