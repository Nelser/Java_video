let num = document.getElementById("txtnum") //pega o número digitado pelo user
let lista = document.getElementById("flista") //local onde será apresentado o número no site
let conjunto = [] //array onde ficará os numeros
let res = document.getElementById("res") //onde aparecerá a analise

function isNumero (n) {//função que verifica se o número esta dentro da condição
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else {
        return false
    }
}

function inLista (n, l) {//função que verifica se o número digitado já está na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
    
}


function adicionar() { //adiciona o número
    if(isNumero(num.value) && !inLista(num.value, conjunto)) { //verifica se é um número e se não está na lista
        conjunto.push(Number(num.value)) //adiciona o número na array
        let item = document.createElement('option') //cria uma option para o select
        item.text = `Valor ${num.value} adicionado` //texto do option acima
        lista.appendChild(item) //indica o select em que será afiliado
        res.innerHTML = "" //apaga a parte de análise
    }
    else {
        alert('Valor indefinido ou já encontrado na lista.')
    }
    num.value = '' //redefine o texto para vazio
    num.focus() //deixa a caixa de digitação selecionada
}

function finalizar() { //faz as operações de analise
    if(conjunto.length == 0){ //se a quantidade de valores na array for 0..
        alert('Adicione valores antes de finalizar')
    }
    else {
        let tot = conjunto.length
        let maior = conjunto[0]
        let menor = conjunto[0]
        let soma = 0
        let media = 0
        for(let pos in conjunto) { //percorre o array conjunto inteiro, realizando as operações dentro
            soma += conjunto[pos]
            if(conjunto[pos] > maior)
                maior = conjunto[pos]
            if(conjunto[pos] < menor)
                menor = conjunto[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior} </p>`
        res.innerHTML += `<p>O menor número informado foi ${menor} </p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}`
    }
}









//função pro enter
document.getElementById("txtnum").onkeypress = function(e) {
    if(e.keyCode == 13){ //código para o Enter
        adicionar() //executa 

        e.preventDefault() //previne de enviar dados
    }
}


























/*function analisar() {
    let num = Number(document.getElementById("txtnum").value) //pega o número digitado pelo user
    var p1 = document.getElementById("flista")
    var p2 = document.getElementById("res") //local onde será apresentado o número no site
    var conjunto = [] //array onde ficará os numeros
    
    var res = document.getElementById("res") //onde aparecerá a analise

    res.innerHTML = ""

    if(validaAnalisar()) {
        execAnalisar()
    }
}

function execAdicionar(num, conjunto, lista) {
    conjunto.push(num)
    alert(conjunto.length)

    p.innerHTML += `Valor ${num} adicionado. <br>`

}

function execAnalisar() {

}

function validaAdicionar(num, conjunto) {
    
    //verificando se o valor inserido pelo usuário já foi adicionado antes
    for(var posicao = 0; posicao < conjunto.length; posicao++){
        if(conjunto[posicao] == num) {
            alert("[ERRO] Esse número já foi adicionado.")
            return false
            break
        }
    }

    //resto da validação
    if(num >= 1 && num <= 100) {
        return true
    }
    else if(num == "") {
        alert("[ERRO] Insira um número.")
    }
    else if(num < 1 || num > 100) {
        alert("[ERRO] O número deve ser entre 1 e 100.")
    }
    
    
    return false
}

function validaAnalisar() {
    if(p1 == null) {
        return false
    }

    return true
}*/