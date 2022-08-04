/*
OBJETIVO 1 - Ao clicar na tecla avançar tem que mostrar o próximo card.
    Passo 1 - Dar um jeito de pegar o elemento HTML da seta avançar
    Passo 2 - Identificar o clique do usuário na seta avançar
    Passo 3 - Fazer aparecer o próximo card da lista
    Passo 4 - Buscar o cartão que está selecionado e esconder */

// Passo 1 - Dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById('btn-avancar');
const cartoes = document.querySelectorAll('.cartao')
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado')
    cartaoSelecionado.classList.remove('selecionado')
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add('selecionado');
}

// Passo 2 - Identificar o clique do usuário na seta avançar
btnAvancar.addEventListener('click',
    function () {
        if (cartaoAtual === cartoes.length - 1) {
            cartaoAtual = 0;
        } else {
            cartaoAtual++;
        }
        
        esconderCartaoSelecionado();

        // Passo 3 - Fazer aparecer o próximo card da lista
        mostrarCartao(cartaoAtual);
        // Passo 4 - Buscar o cartão que está selecionado e esconder */
    });

// OBJETIVO 2 - Ao clicar na tecla voltar tem que mostrar o card anterior.
// Passo 1 - Dar um jeito de pegar o elemento HTML da seta voltar
// Passo 2 - Identificar o clique do usuário na seta voltar
// Passo 3 - Fazer aparecer o card anterior da lista
// Passo 4 - Buscar o cartão que está selecionado e esconder   
const btnVoltar = document.getElementById('btn-voltar');

btnVoltar.addEventListener('click',
    function () {
        if (cartaoAtual === 0){
            cartaoAtual = cartoes.length - 1
        } else {
            cartaoAtual--;

        };

        esconderCartaoSelecionado();

        // cartaoAtual--;

        // Passo 3 - Fazer aparecer o próximo card da lista
        mostrarCartao(cartaoAtual);

        // Passo 4 - Buscar o cartão que está selecionado e esconder */

    });