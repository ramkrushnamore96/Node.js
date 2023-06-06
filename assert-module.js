const assert = require('assert')

let x = 5, y = 5 

try {
    assert(x == y)
    console.log(`${x} is equal to ${y}`)
} catch {
    console.log(`${x} is not equal to ${x}`)
}

// assert(x == y)
