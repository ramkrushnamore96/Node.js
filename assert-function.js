const assert = require('assert')

// function
try {
    assert(0)
    // 0 = false
    // 1 = true
    console.log('No error occured!')
} catch(error) {
    console.log('Error: ', error)
}