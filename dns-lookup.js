const dns = require('dns')

const options = {
    family: 4,
    hints: dns.ADDRCONFIG | dns.V4MAPPED
}

dns.lookup('abc.com', options, (error, address, family)=>{
    if(error) return console.log('Error: ', error) 
    
    console.log('address: %j family: IPv%s', address, family)
})