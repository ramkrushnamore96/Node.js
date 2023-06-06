// syntax:immediate.hasRef()

const immediate = setimmediate(function alfa (){
    console.log('0.>',12)
})

console.log('1.>',immediate.hasRef())
console.log('2.>',immediate.ref())
console.log('3.>',immediate.unref())
console.log('4.>',immediate.hasRef())

clearImmediate(immediate)

console.log('5.>',2)