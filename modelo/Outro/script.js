function verificar() {
    var data = new Date() //não sei
    var ano = data.getFullYear() //recebe o ano na forma inteira, 4 digitos
    var fano = document.getElementById("txtano") //pega o ano digitado pelo usuario
    var res = document.getElementById("res") //pega o campo em que será exibido o resultado
    if (fano.value.length == 0 || Number(fano.value) > ano){ //se o valor do ano estiver zero ou maior que o atual
        alert("[ERRO] Verifique os dados e tente novamente!")
    }else {
        var fsex = document.getElementsByName("radsex") //pega a seleção na caixa Radio
        var idade = ano - Number(fano.value) //calcula o ano da pessoa a partir do ano em que estamos com o que ela nasceu
        var genero = ""
        var img = document.createElement("img") //cria um campo de imagem 
        img.setAttribute("id", "foto")//cria os campos para o endereço da imagem
        //Caso for homem
        if (fsex[0].checked){ //verifica se foi checada
            genero = "Homem" //define o genero
            if(idade >= 0 && idade < 10){
                img.setAttribute("src", "imagem/bebe_menino.jpg") 
            }else if (idade < 21){
                img.setAttribute("src", "imagem/jovem_homem.jpg")
            }else if (idade < 50){
                img.setAttribute("src", "imagem/adulto.jpg")
            }else {
                img.setAttribute("src", "imagem/idoso.jpg")
            }

        //caso for mulher
        }else if (fsex[1].checked) { //verifica se foi checkada
            genero = "Mulher" //define o genero
            if(idade >= 0 && idade < 10){
                img.setAttribute("src", "imagem/bebe_menina.jpg")
            }else if (idade < 21){
                img.setAttribute("src", "imagem/jovem_mulher.jpg")
            }else if (idade < 50){
                img.setAttribute("src", "imagem/adulta.jpg")
            }else {
                img.setAttribute("src", "imagem/idosa.jpg")
            }
        
        }
        res.style.textAlign = "center" //posição do texto que aparecerá
        res.innerHTML= `Detectamos ${genero} com ${idade} anos` //define o texto que tera
        res.appendChild(img)//Adiciona um elemento, no caso img
    }

}