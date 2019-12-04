<template>
  <div class="cycle">
    <div v-for="(item,index) in maps" :key="index">
      <li>{{item}}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  data () {
    return {
      maps: ['test1', 'test2', 'test3']
    }
  }
}
</script>

<style>

</style>
