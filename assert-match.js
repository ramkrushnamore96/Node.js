//  Syntax: assert.match(string, regexp[, message])

const assert = require('assert')

try {
    assert.match('I am good', /Good/i)
    console.log('Text found!')
} catch(error) {
    console.log('Error- ', error)
}
