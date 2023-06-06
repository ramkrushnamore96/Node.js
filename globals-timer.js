let time = setInterval(timer,1000)

function timer() {
    let date = new Date()
    return console.log(date.toLocaleTimeString())
}

setTimeout(() => {
    console.log('Good-Morning')
    clearInterval(time)
},4000)
