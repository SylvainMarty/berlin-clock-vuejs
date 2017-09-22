<template>
  <div class="berlin-clock">
    <h1>Berlin clock</h1>
    <h2>{{ displayTime }}</h2>

    <div class="lamps-wrapper">
      <div class="row second">
        <span :class="secondsLamp(time)"></span>
      </div>
      <div class="row">
        <span v-for="(lamp,i) in fiveHoursRow(time)" :class="lamp"></span>
      </div>
      <div class="row">
        <span v-for="(lamp,i) in singleHoursRow(time)" :class="lamp"></span>
      </div>
      <div class="row five-minutes">
        <span v-for="(lamp,i) in fiveMinutesRow(time)" :class="lamp"></span>
      </div>
      <div class="row">
        <span v-for="(lamp,i) in singleMinutesRow(time)" :class="lamp"></span>
      </div>
    </div>
  </div>
</template>

<style>
.lamps-wrapper {
  width: 500px;
  margin: 0 auto;
}
.lamps-wrapper .row {
  width: 100%;
  text-align: center;
}
.lamps-wrapper .row span {
  width: 7em;
  height: 100px;
  display: inline-block;
  margin: 0 0.2em;
}
.lamps-wrapper .row.second span {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}
.lamps-wrapper .row.five-minutes span {
  width: 2.3em;
}

.Y {
  background-color: #ffeb3b;
}
.R {
  background-color: #ff5252;
}
.O {
  background-color: #607d8b;
}
</style>


<script>
import moment from 'moment'

var dateformat = 'HH:mm:ss'

export default {
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
      return time.seconds() % 2 === 0 ? 'Y' : 'O'
    },
    /**
     * Indicate which lamp in the Five Hours Row must be on or off
     * @param time a momentJS date
     */
    fiveHoursRow (time) {
      return this.formatHoursRow(this.round5(time.hours()) / 5)
    },
    /**
     * Indicate which lamp in the Single Hours Row must be on or off
     * @param time a momentJS date
     */
    singleHoursRow (time) {
      return this.formatHoursRow(time.hours() % 5)
    },
    /**
     * Return an array of string filled with N 'R'
     * @param nbLamp the number of lamp which need to be on
     */
    formatHoursRow (nbLamp) {
      let row = ['O', 'O', 'O', 'O']
      for (let i = 0; i < nbLamp; i++) {
        row[i] = 'R'
      }
      return row
    },
    /**
     * Indicate which lamp in the Five Minutes Row must be on or off
     * @param time a momentJS date
     */
    fiveMinutesRow (time) {
      let row = ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']
      let nbLamp = this.round5(time.minutes()) / 5
      for (let i = 1; i <= nbLamp; i++) {
        row[i - 1] = i % 3 === 0 ? 'R' : 'Y'
      }
      return row
    },
    /**
     * Indicate which lamp in the Single Minutes Row must be on or off
     * @param time a momentJS date
     */
    singleMinutesRow (time) {
      let row = ['O', 'O', 'O', 'O']
      let nbLamp = (time.minutes() % 10) % 5
      for (let i = 1; i <= nbLamp; i++) {
        row[i - 1] = 'Y'
      }
      return row
    },
    /**
     * Return the nearest inferior multiple of 5
     * @param number
     */
    round5 (number) {
      return Math.floor(number / 5) * 5
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
  }
}
</script>