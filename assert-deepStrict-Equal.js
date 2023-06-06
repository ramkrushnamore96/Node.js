// syntax - assert.deepStrictEqual(actual, expected[, message])
//Equal value and equal type :: 1 === '1'

const assert = require('assert')

try {
    assert.deepStrictEqual({a: 1}, {a : '1'})
    console.log('No error found!')
} catch(error) {
    console.log('Error Found!')
}