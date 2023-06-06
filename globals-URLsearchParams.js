const params = new URLSearchParams({
    user: 'aaba',
    course: ['Math', 'chem', 'phys']
})

console.log('params: ', params)

const map = new Map()
map.set('WestBengal', 'Kolkata')
map.set('Maharashtra', 'Mumbai')

const capital = new URLSearchParams(map)

console.log('capital: ', capital.toString())

const myURL = new URL('https://example.com/?abc=234&abc=526')

console.log('get: ', myURL.searchParams.get('abc'))
console.log('getAll: ', myURL.searchParams.getAll('abc'))
console.log('has: ', myURL.searchParams.has('abc'))
console.log('has xyz: ', myURL.searchParams.has('xyz'))

const params2 = new URLSearchParams('abc=123&ecd=526')
params2.set('xyz', '234')
params2.set('abc', '456')
params2.delete('ecd')
console.log('params2: ', params2.toString())