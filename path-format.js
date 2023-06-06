//  Syntax: path.format(path object)

const path = require('path')

let fileFormat = path.format({
    root: 'ignored\\root\\',
    dir: '\\home\\user\\person',
    base: 'detail.txt',
    name: 'detail',
    ext: '.txt'
})
console.log(fileFormat)
