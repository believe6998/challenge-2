const NAMES = ['alfred', 'alfie', 'alfie', 'xc', '34', 'a', 'ak', 'xcxal', 'alfie', 'alfi']

function solve(names) {
    let prevNames = []
    for (let i = 0; i < names.length; i++) {
        let name = getName(names[i], prevNames)
        prevNames[i] = names[i]
        names[i] = name
    }
    return names;
}

function getName(currentName, prevNames) {
    if (!prevNames){
        return currentName[0]
    }
    let max = 0
    let count = 1
    for (let i = 0; i < prevNames.length; i++) {
        let length = currentName.length < prevNames[i].length ? currentName.length : prevNames[i].length
        let sameCharacters = compare(currentName, prevNames[i], length)
        if (sameCharacters === length && currentName.length <= prevNames[i].length) {
            count++
        }
        if (sameCharacters > max) {
            max = sameCharacters
        }
    }
    return count > 1 ? currentName + ' ' + count : currentName.substring(0, max + 1)
}

function compare(str1, str2, length) {
    let sameCharacters = 0
    for (let i = 0; i < length; i++) {
        if (str1[i] === str2[i]) {
            sameCharacters++
        } else {
            break
        }
    }
    return sameCharacters
}

function main() {
    const res = solve(NAMES)
    console.log((res || []).join('\n'));
}

main();