import { analyzeArray } from "../code/analyzeArray";

it('handle empty array', () => {
    expect(analyzeArray([]))
    .toEqual({
        average: null,
        min: null,
        max: null,
        length: 0
    });
})

it('handle normal array', () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7]))
    .toEqual({
        average: 4,
        min: 1,
        max: 7,
        length: 7
    })
})