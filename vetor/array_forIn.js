let num = [3, 2, 1, 4]
let pos = 0
num.sort()

console.log(`quantia de valores no vetor é ${num.length}`)
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}