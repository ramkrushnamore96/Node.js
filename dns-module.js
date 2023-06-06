const dns = require('dns')

const website = 'abc.com'

dns.lookup(website,
    function onLookup(error, address, family){
        console.log('address: ', address, family)

        dns.reverse(address, function(error, hostnames){
            console.log('reverse for: '+ address + ': ' + JSON.stringify(hostnames))
        })
    } 
)
