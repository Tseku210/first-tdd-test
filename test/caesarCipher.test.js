import { caesarCipher } from "../code/caesarCipher";
const alph = 'abcdefghijklmnopqrstuvwxyz'
it('"hello world" equals "mjqqt btwqi" with a shift of 5', () => {
    expect(caesarCipher('hello world', 5))
    .toBe('mjqqt btwqi')
})

it('handle wrapping from z to a', () => {
    expect(caesarCipher('zebra', 10))
    .toBe('jolbk')
})

it('handle same case', () => {
    expect(caesarCipher('HeLlo WoRLd', 5))
    .toBe('MjQqt BtWQi')
})

it('handle punctuation', () => {
    expect(caesarCipher('hello, world!', 5)).toBe('mjqqt, btwqi!')
})