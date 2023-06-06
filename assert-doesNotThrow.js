//  Syntax: assert.doesNotThrow(fn[, error][, message])
const assert = require('assert')

try {
    assert.doesNotThrow(() => {
        // console.log('No error')
        throw new TypeError('Wrong value')
    })
} catch(error) {
    console.log('Error', error)
}