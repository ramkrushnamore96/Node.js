//  Syntax: assert.ifError(value)

const assert = require('assert')
const a = []
try {
    assert.ifError(a[0])
    console.log('No error found')
} catch(error) {
    console.log('Error- ', error)
}