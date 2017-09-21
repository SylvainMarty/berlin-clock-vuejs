<template>
  <div class="berlin-clock">
    <h1>Berlin clock</h1>
    <h2>{{ displayTime }}</h2>
  </div>
</template>

<script>
import moment from 'moment'

var dateformat = 'HH:mm:ss'

export default {
  // Props de base d'un composant VueJS
  name: 'berlin-clock',
  data () {
    return {
      time: moment()
    }
  },
  methods: {
    /**
     * Indicate if the seconds lamp must be on or off
     * @param time a momentJS date
     */
    secondsLamp (time) {
      let seconds = time.seconds()
      return seconds % 2 === 0 ? 'Y' : 'O'
    },
    updateTime () {
      this.time = moment()
    }
  },
  computed: {
    displayTime () {
      return this.time.format(dateformat)
    }
  },
  mounted () {
    // Initialise le setInterval à la création du composant
    this.interval = setInterval(this.updateTime, 1000)
  },
  beforeDestroy () {
    // Détruit le setInterval à la destruction du composant
    clearInterval(this.interval)
  },
  // Props globales du composant
  dateformat: dateformat
}
</script>