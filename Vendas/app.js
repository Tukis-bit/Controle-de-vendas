import prompt from 'prompt-sync'
import * as funcoes from './funcoes.js';
const ler = prompt();
let vendas = [];

funcoes.apresentarPrograma();

//Repete o menu enquanto o usuário não sair
for(let i = 1; i != 0; i++){

    funcoes.apresentarMenu();
    let resposta = Number(ler());

    if(resposta == 1){

        funcoes.registrarVenda(vendas);

    }
}