import moment from 'moment'
import BerlinClock from '@/components/BerlinClock'

describe('BerlinClock.vue', () => {
  /*
   * Fonctionnal test cases
   */

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

  // the Five Minutes Row test case
  it('should indicate which lamp in the Five Minutes Row must be on or off', () => {
    var inputs = [
      { time: '00:00:00', expected: ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'] },
      { time: '23:59:59', expected: ['Y', 'Y', 'R', 'Y', 'Y', 'R', 'Y', 'Y', 'R', 'Y', 'Y'] },
      { time: '12:04:00', expected: ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'] },
      { time: '12:23:00', expected: ['Y', 'Y', 'R', 'Y', 'O', 'O', 'O', 'O', 'O', 'O', 'O'] },
      { time: '12:35:00', expected: ['Y', 'Y', 'R', 'Y', 'Y', 'R', 'Y', 'O', 'O', 'O', 'O'] }
    ]

    inputs.forEach((input) => {
      let actual = BerlinClock.methods.fiveMinutesRow(moment(input.time, BerlinClock.dateformat))
      expect(input.expected)
        .to.eql(actual)
    })
  })

  /*
   * Non-fonctionnal test cases
   */

  // round5() test case
  it('should return the last inferior multiple of 5', () => {
    var inputs = [
      { number: 0, expected: 0 },
      { number: 3, expected: 0 },
      { number: 7, expected: 5 },
      { number: 98, expected: 95 },
      { number: 103, expected: 100 }
    ]

    inputs.forEach((input) => {
      let actual = BerlinClock.methods.round5(input.number)
      expect(input.expected)
        .to.eql(actual)
    })
  })
})
