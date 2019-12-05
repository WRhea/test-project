<template>
  <div id="example-1">
  <button class="beautify-button" v-on:click="Add">Add 1</button>
  <p class="big-size">点击了 {{ counter }} 次.</p>
</div>
</template>

<script>
export default {
  name: 'event',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    Add () {
      this.counter++
    }
  }

}
</script>

<style>

</style>
