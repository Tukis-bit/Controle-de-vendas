import prompt from 'prompt-sync'
import * as funcoes from './funcoes.js';
const ler = prompt();
let vendas = [];

funcoes.apresentarPrograma();
await funcoes.contar(1);

//Repete o menu enquanto o usuário não sair
for(let i = 1; i != 0; i++){

    funcoes.apresentarMenu();
    let resposta = Number(ler());

    await funcoes.contar(1);

    //faz o registro da venda 
    if(resposta == 1){

        console.log('\nQual foi a quantidade de vendas feita?');
        let quant = Number(ler());
        
        for(let i = 1; i <= quant; i ++ ){
        funcoes.registrarVenda(vendas);
        }
    
    }

    //cancela uma venda de acordo com o id
    else if(resposta == 2){
    funcoes.cancelarVenda(vendas);    
    }

    //lista as vendas por data (OBS: isso foi MUITO trabalhoso)
    else if(resposta == 3){
        funcoes.listarDia(vendas);
    }

    else if(resposta == 4){
        funcoes.listarPeriodo(vendas);
    }

    else if(resposta == 5){
        funcoes.listarVendedor(vendas);        
    }

    else if(resposta == 6){
        funcoes.listarMarca(vendas);
    }

    else if(resposta == 7){
        funcoes.listarPorPreco(vendas);
    }


    else if(resposta == 0){
        console.log("Saindo do programa....");
        break;
    }

    else{
        console.log('Código incorreto ');

    }


}