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

  // the Single Minutes Row test case
  it('should indicate which lamp in the Single Minutes Row must be on or off', () => {
    var inputs = [
      { time: '00:00:00', expected: ['O', 'O', 'O', 'O'] },
      { time: '23:59:59', expected: ['Y', 'Y', 'Y', 'Y'] },
      { time: '12:32:00', expected: ['Y', 'Y', 'O', 'O'] },
      { time: '12:34:00', expected: ['Y', 'Y', 'Y', 'Y'] },
      { time: '12:35:00', expected: ['O', 'O', 'O', 'O'] }
    ]

    inputs.forEach((input) => {
      let actual = BerlinClock.methods.singleMinutesRow(moment(input.time, BerlinClock.dateformat))
      expect(input.expected)
        .to.eql(actual)
    })
  })
})
