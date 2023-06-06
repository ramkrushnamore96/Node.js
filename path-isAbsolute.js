//  syntax: path.isAbsolute(path)

const path = require('path')

let path1 = path.isAbsolute('D:/lecture/learn/node/somefile.txt')
console.log(path1)

let path2 = path.isAbsolute('..')
console.log(path2)