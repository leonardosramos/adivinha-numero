function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute
    
    if(chuteForInvalido(numero)){
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h1><strong>Game Over!!!</strong></h1>
                <h3>Pressione o botão para jogar novamente</h3>
                <button onclick="reiniciarPagina()">Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
    }
    

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}.</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h1>Parabéns, você <strong>acertou!</strong></h1>
        <h3>O número era <strong>${numeroSecreto}</strong>!<h3>
        <button onclick="reiniciarPagina()">Jogar novamente</button>
        `
    } else if(numero < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <strong><i class="fa-solid fa-arrow-up-long"></i></strong></div>`
    } else{
        elementoChute.innerHTML += `<div>O número secreto é menor <strong><i class="fa-solid fa-arrow-down-long"></i></strong></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}


