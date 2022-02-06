export function capitalize(str) {
    let cap = ''
    for(let i = 0; i < str.length; i++){
        if (i === 0) {
            cap += str[i].toUpperCase()
        } else {
            cap += str[i].toLowerCase()
        }
    }
    return cap;
}