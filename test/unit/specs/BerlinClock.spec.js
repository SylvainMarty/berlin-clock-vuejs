import moment from 'moment'
import BerlinClock from '@/components/BerlinClock'

describe('BerlinClock.vue', () => {
  // the Seconds Lamp test case
  it('should indicate if the seconds lamp must be on or off', () => {
    var inputs = [
      { time: '00:00:00', expected: 'Y' },
      { time: '23:59:59', expected: 'O' }
    ]

    inputs.forEach((input) => {
      let actual = BerlinClock.methods.secondsLamp(moment(input.time, BerlinClock.dateformat))
      expect(input.expected)
        .to.equal(actual)
    })
  })
})
