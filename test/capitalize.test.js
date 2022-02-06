import {capitalize} from '../code/capitalize'

it('capitalize on all lower case', () => {
    expect(capitalize('hello')).toBe('Hello')
})

it('capitalize on all upper case', () => {
    expect(capitalize('HELLO')).toBe('Hello')
})