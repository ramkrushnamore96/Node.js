const fs = require('fs')

fs.readFile('sample.txt', 'utf-8', function(error,data){
    if(error) return console.error(error)
    console.log('Data:', data)
})