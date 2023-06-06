//  Syntax: url.pathname

const myURL = new URL('https://dummyWebsite.org/nodejs')

console.log('Before changes')
console.log(myURL.href)

const pathaname = myURL.pathname
console.log('pathaname: ', pathaname)

myURL.pathname = 'expressjs'
console.log('After changes')
console.log(myURL.href)
console.log(myURL)
