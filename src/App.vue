<template>
  <div id="app">
    <router-view/>
    <callAs />
  </div>
</template>

<script>
import callAs from '@/components/callAs'
export default {
  name: 'App',
  components: {
    callAs
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
