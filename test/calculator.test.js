import {calculator} from '../code/calculator'

it('add 10 + 111', () => {
    expect(calculator.add(10, 111))
    .toEqual(121)
})

it('subtract 8 - 20', () => {
    expect(calculator.subtract(8, 20))
    .toEqual(-12)
})

it('divide 10 / 2', () => {
    expect(calculator.divide(10, 2))
    .toEqual(5)
})

it('divide 25 / 0', () => {
    expect(calculator.divide(25, 0))
    .toBeNull()
})

it('multiply 2 by 20', () => {
    expect(calculator.multiply(2, 20)).toEqual(40)
})

