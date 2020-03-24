let num = [5, 2] //declarando array
num.push(3, 4, 4, 5, 8, 9, 9, 9, 9) //faz a inserção de valores no array, colocando os valores nas posições seguintes 
num[6] = 7 //outra forma de colocar uma array, mas você define onde ela vai entrar
num.sort() //organiza os números em ordem crescente

console.log(num)//mostra o array como um todo

console.log(`O valor da posição 3 é ${num[3]}`)

let pos = num.indexOf(4) //indicando um número para ser procurado
console.log(pos)//vai mostrar a posição em que o número indicado na função indexOf está

if(pos == -1){//vai verificar se o valor retornado é -1, que pode ser explicado como não foi possível encontrar o valor indicado
    console.log("[ERRO] Valor não encontrado")
}else {
    console.log(`O valor está na posição ${pos}`)
}


let i = 0 //variável 
console.log(`Nosso vetor tem ${num.length} posições`) //vai mostrar a quantia de posições dentro da array
while (i <= num.length) { //estrutura que fara a lista dos números de dentro da array
    console.log(num[i]) //vai escrever no console
    i++ //vai somar a cada vez que a estrutura acontecer denovo até a condição ser false
}// fim do code
