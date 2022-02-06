import {reverseString} from '../code/reverseString'

it('reverse a normal string', () => {
    expect(reverseString('hello'))
    .toBe('olleh')
})

it('reverse whitespaced string', () => {
    expect(reverseString('  hello'))
    .toBe('olleh  ')
})