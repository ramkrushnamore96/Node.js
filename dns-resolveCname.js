// Syntax - dns.resolveCname(hostname, callback)

// Records that may be returned are:

// A: IPv4 address
// AAAA: IPv6 address
// ANY: Any records
// CNAME: canonical name records
// MX: mail exchange records
// NAPTR: name authority pointer records
// NS: name server records
// PTR: pointer records
// SOA: start of authority records
// SRV: service records
// TXT: text records

const dns = require('dns')

dns.resolveCname('abc.xyz', (error, address) => {
    if(error) return console.error('Error: %j', error)

    console.log('address: %j', address)
})