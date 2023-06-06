// syntax:url.password

const myURL = new URL('https://username:password@dummywebsite.org/node.js')

console.log('Before changes')
console.log(myURL.href)

const password = myURL.password
console.log('password', password)

myURL.password = 'new password'
console.log('After changes')
console.log(myURL.href)