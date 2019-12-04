<template>
<div class="select">
 <div v-if="modal">show Vue.js</div>
  <div v-else>
    hide Vue.js
  </div>
  <button @click="changeModal">change</button>
</div>

</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
      modal: true
    }
  },
  methods: {
    changeModal () {
      this.modal = !this.modal
    }
  }
}
</script>

<style></style>
