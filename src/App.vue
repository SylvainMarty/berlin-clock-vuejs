<template>
  <div id="app">
    <berlin-clock></berlin-clock>
  </div>
</template>

<script>
import BerlinClock from './components/BerlinClock'

export default {
  name: 'app',
  components: {
    BerlinClock
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
