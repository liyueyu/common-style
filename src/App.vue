<template>
    <Root class="page" />
</template>

<script>
import Root from './pages/Root.vue'

export default {
  name: 'app',
  components: {
      Root
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
