const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(__dirname,'test'), (error) => {
    if(error) return console.error('Error:', error)

    console.log('Directory created successfully!')
})