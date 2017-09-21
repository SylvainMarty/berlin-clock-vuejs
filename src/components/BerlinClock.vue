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
     * Indicate if the Seconds lamp must be on or off
     * @param time a momentJS date
     */
    secondsLamp (time) {
      let seconds = time.seconds()
      return seconds % 2 === 0 ? 'Y' : 'O'
    },
    /**
     * Indicate which lamp in the Single Minutes Row must be on or off
     * @param time a momentJS date
     */
    singleMinutesRow (time) {
      let row = ['O', 'O', 'O', 'O']
      let unites = time.minutes() % 10
      if (unites !== 0 && unites !== 5) {
        unites = unites < 5 ? unites : unites - 5
        for (let i = 0; i < unites; i++) {
          row[i] = 'Y'
        }
      }
      return row
    },
    round5 (x) {
      return Math.floor(x / 5) * 5
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