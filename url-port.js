// syntax:url.port

const myURL = new URL('https://dummywebsite.org:8080/?articles=node')

console.log('Before changes')
console.log(myURL.href)

const port = myURL.port
console.log('port:', port)

myURL.port = 1234
console.log('After changes')
console.log(myURL.href)