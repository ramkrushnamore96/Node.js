// syntax - dns.resolveAny(hostname, callback)

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

dns.resolveAny('unipune.ac.in', (error, records)=>{
    console.log('records: %j', records)
})
