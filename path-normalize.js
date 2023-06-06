//  Syntax: path.normalize(path)

const path = require('path')

let path1 = path.normalize('user/admin/files/..')
console.log(path1)
console.log(path.normalize('user/admin/files/../comment'))
console.log(path.normalize('user/admin///files/..////comment'))