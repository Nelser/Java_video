function contar () {
    var inicio = parseFloat(document.getElementById("txtini").value) //pega o valor do inicio
    var fim = parseFloat(document.getElementById("txtfim").value) //pega o valor do fim
    var passo = parseFloat(document.getElementById("txtpass").value) //pega o valor do passo
    //var res = document.getElementById("res")
    var p1 = document.getElementById("fcontagem") //
    var p2 = document.getElementById("contagem")
    
    limpaP2(p2)

    p1.innerHTML = "Contando: "
    if(validaEntrada(inicio, fim, passo)){
        execContagem(inicio, fim, passo, p2)
    }    
  
}//fecha a function

//evento que vai fazer a tecla enter executar o botão
document.getElementById("txtpass").onkeypress = function (e) {
    if(e.keyCode == 13) {
        contar()

        //previne o envio 
        e.preventDefault()
    }
}

function limpaP2 (p2) {
    p2.innerHTML = ""
}

function validaEntrada(inicio, fim, passo){
    if(inicio < fim && passo > 0 ){
        return true;
    }
    if (inicio == null || inicio >= fim) {
        alert("[ERRO] Insira um número para o início que seja menor que o fim. \n"+
              "Insira um número menor que o do fim.")
    }
    if (fim == null || fim < inicio) {
        alert("[ERRO] Insira um número para o fim que seja maior que o início. \n "+
              "Insira um número maior que o do início.")
    }
    if (passo > fim){
        alert("[ERRO] O passo não pode ser maior que o fim.")
    } 
    if(passo == 0){
        alert("[ERRO] O passo não pode ser igual a zero.")
    }   
    return false;
}

function execContagem(inicio, fim, passo, p2){
    var atual = inicio;

    while(atual <= fim)
    {
        p2.innerHTML += String(atual) + " "
        atual += passo;
    }
}