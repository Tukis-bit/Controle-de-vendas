import prompt from 'prompt-sync'
import * as funcoes from './funcoes.js';
const ler = prompt();
let vendas = [];

funcoes.apresentarPrograma();

//Repete o menu enquanto o usuário não sair
for(let i = 1; i != 0; i++){

    funcoes.apresentarMenu();
    let resposta = Number(ler());

    //faz o registro da venda 
    if(resposta == 1){

        console.log('\nQUal foi a quantidade de vendas feita?');
        let quant = Number(ler());
        
        for(let i = 0; i <= quant; i ++ ){
        funcoes.registrarVenda(vendas);
    }

    }
}