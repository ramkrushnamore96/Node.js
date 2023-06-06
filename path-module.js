const path = require('path')

let path1 = path.format({
    root: 'C:\\',
    dir: 'C:\\work\\css',
    name: 'style',
    ext: '.css'
})
console.log("Path: ", path1)