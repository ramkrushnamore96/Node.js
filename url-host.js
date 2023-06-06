const myURL = new URL('https://ramkrmore.000webhostapp.com/')

console.log('Before changes')
console.log(myURL.href)

console.log('Host:', myURL.host)

myURL.host = 'anotherdummywebsite.org'
console.log('After changes')
console.log('New URL:', myURL.href)

const host = myURL.host
console.log('Host:', host)