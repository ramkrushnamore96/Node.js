// Syntax:url.hash

const myURL = new URL('https://dummywebsite.org/somepath/#user')

console.log('Before changes')
console.log(myURL.href)
console.log('Hash:',myURL.hash)

myURL.hash = 'username'
console.log('After changes')
console.log(myURL.href)

const hash = myURL.hash
console.log('Hash:',hash)