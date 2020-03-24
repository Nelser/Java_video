function tabuada () {
    var num = Number(document.getElementById("txtnum").value) //recebe o valor que será calculado
    var res = document.getElementById("res")

    limpaRes(res)

    //acontece o processo de validação e de calculo
    if(validaTabuada(num)){
        calculaTabuada(num, res)
    }
}

//Função para que o usuário consiga executar a função direto da caixa de texto com o Enter
document.getElementById("txtnum").onkeypress = function(e) {
    if(e.keyCode == 13){
        tabuada()

        e.preventDefault()
    }
}

function limpaRes (res) {
    res.innerHTML = " "
}

function calculaTabuada (num, res) {
    var i = 0
    var agora = num

    while (i <= 10 ) {

        res.innerHTML += `${agora} X ${i} = `+ String(agora * i) + " <br>"
        i++
    }
}

function validaTabuada (num) {
    if(num >= 0) {
        return true
    }
    else if (num < 0) {
        alert("[ERRO] Digite um número maior que zero.")
    }
    return false
}