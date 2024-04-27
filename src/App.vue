<template>
  <div id="app">
    <Decision />
  </div>
</template>

<script>
import Decision from './components/Decision.vue'

export default {
  name: 'App',
  components: {
    Decision
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
