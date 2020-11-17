// Code your solutions in this file
function writeCards(array, event) {
    let a = []
    for (let i =0; i < array.length; i++) {
        a.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return a
}

function countDown(int) {
    let i = 0
    while (i <= int) {
        console.log(int-i);
        i++
    }
}