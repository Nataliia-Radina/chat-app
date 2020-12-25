import { timeNow } from '@/services/utils'

describe('Utility functions', () => {
    describe('timeNow', () => {
        it('Should format current time correctly and add leading zeros only if needed', () => {
            const testDate = 'Fri Dec 25 2020 11:11:54'
            expect(timeNow(testDate)).toEqual('11:11')
        })
    })
})
