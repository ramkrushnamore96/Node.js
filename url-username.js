//syntax: url:username

const http = require('url')

const myURL = new URL('https://ram:ramkrushna96@dummyWebsite.org/somepath/#ram')

console.log('Before changes')
console.log(myURL.href)

myURL.username = 'ramkrushna'
console.log('After changes')
console.log(myURL.href)

const username = myURL.username
console.log(username)
