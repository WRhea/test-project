<template>
  <div>
    <input class="beautify-input" v-model="value"/>
    <div class="label big-size">{{value}}</div>
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
