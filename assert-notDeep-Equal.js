const assert = require('assert')

try{
    assert.notDeepEqual('7',20) // '7' !==20
    console.log('No error found')
} catch(error) {
    console.log('Error-',error)
}