import prompt from "prompt-sync"
const ler = prompt();

export function apresentarPrograma(){
    console.log("--------------------------------------\n-   Seja bem vindo à Loja de Tenis   -\n--------------------------------------\n");
}


export function apresentarMenu(){
    console.log(`
      ------------------------------------
          O que iremos fazer?
      -   1. Registrar Uma Venda         -
      -   2. Cancelar Uma Venda          -
      -   3. Listar Vendas do Dia        -
      -   4. Listar Vendas Periodo       -
      -   0. Sair Do Programa            -
      ---------------------------------`);
      
  } 
  export function registrarVenda(vendas) {
    console.log('\nMe informe o modelo do Tênis');
    let modelo = ler();

    console.log('\nMe informe o número do tênis vendido');
    let numero = Number(ler());

    console.log('\nMe informe a cor do tênis vendido');
    let cor = ler();

    console.log('\nMe informe o vendedor do tênis');
    let vendedor = ler();

    console.log('\nMe informe a data da venda');
    let data = new Date(ler());

    let id;
    while (true) {
        console.log('\nMe informe o ID da venda');
        id = Number(ler());

        const existe = vendas.some(v => v.idCompra === id);

        if (existe) {
            console.log('ID de compra inválido pois já foi utilizado, me informe outro.');
        } else {
            break;
        }
    }

    const venda = {
        modeloTenis: modelo,
        numeroTenis: numero,
        corTenis: cor,
        vendedorTenis: vendedor,
        dataVenda: data,
        idCompra: id
    };

    vendas.push(venda);
    console.log('Venda registrada com sucesso!');
}