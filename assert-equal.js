const assert = require('assert')

let x = 3, y = 3

try {
    assert(x == y)
    console.log(`${x} is equal to ${y}`)
} catch {
    console.log(`${x} is not equal to ${y}`)
}

// assert(x == y)
