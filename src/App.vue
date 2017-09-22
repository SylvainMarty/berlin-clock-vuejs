<template>
  <div id="app">
    <berlin-clock></berlin-clock>
    
    <a href="https://github.com/SylvainMarty/berlin-clock-vuejs" target="_blank">
      <img src="./assets/github-256.png" alt="logo Github" width="30px" height="30px">
    </a>
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
  margin-top: 30px;
}

a {
  display: inline-block;
  margin-top: 10px;
}
</style>
