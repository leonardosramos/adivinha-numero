const menorValor = 10;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio()
function reiniciarPagina() {
    // Recarrega a página
    window.location.reload();
}
const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 101)
    
}
console.log(numeroSecreto)

