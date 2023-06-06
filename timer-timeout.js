const timeout = setTimeout(function alfa(){
    console.log('0.>', 12)
})

console.log('1.>', timeout.hasRef())
console.log('2.>', timeout.ref())
console.log('3.>', timeout.unref())
console.log('4.>', timeout.hasref())

clearImmediate(timeout)

console.log('5.>', 2)