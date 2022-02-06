export function analyzeArray(arr) {
    let obj = {
        average: null,
        min: null,
        max: null,
        length: 0
    }

    if (arr.length === 0) {
        return obj
    } else {
        obj.average = getAverage(arr);
        obj.min = getMin(arr);
        obj.max = getMax(arr);
        obj.length = arr.length;
    }

    return obj
}

function getAverage(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function getMin(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

function getMax(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}