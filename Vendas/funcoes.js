import prompt from "prompt-sync"
const ler = prompt();

export function apresentarPrograma(){
    console.log("--------------------------------------\n-   Seja bem vindo à Loja de Tênis   -\n--------------------------------------\n");
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

    console.log('\nMe informe a marca do tênis');
    let marca = ler();

    console.log('\nMe informe o modelo do Tênis');
    let modelo = ler();

    console.log('\nMe informe o número do tênis vendido');
    let numero = Number(ler());
    
        console.log('\nMe informe a cor do tênis vendido');
        let cor = ler();

    console.log('\nMe informe o valor do tênis');
    let valor = Number(ler());

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
        } 
        
        else {
            break;
        }
    }

    const venda = {
        marcaTenis: marca,
        modeloTenis: modelo,
        numeroTenis: numero,
        corTenis: cor,
        vendedorTenis: vendedor,
        dataVenda: data,
        valorVenda: valor,
        idCompra: id
    };

    vendas.push(venda);
    console.log('\nVenda registrada com sucesso!');
}

export function cancelarVenda(vendas){
    console.log('\nMe informe o id da venda que você deseja cancelar');
    let idCancela = Number(ler());

    let index = vendas.findIndex(v => v.idCompra === idCancela);

    if(index > -1){
        console.log(`Cancelando venda de id ${idCancela}...`);

        vendas.splice(index,1);        
    }

    else{
        console.log('Não existe venda com esse id ');
    }

}

export function listarDia(vendas){
    
    while (true) {
        
        console.log(`me informe o dia que você deseja a lista de vendas`);
        let dia = new Date(ler());
        let diaDi = dia.toDateString();


    const existe = vendas.some(v => new Date(v.dataVenda).toDateString() === diaDi);

  // Filtra as vendas do dia desejado
  let vendasDoDia = vendas.filter(v => new Date(v.dataVenda).toDateString() === diaDi);

  if (vendasDoDia.length > 0) {
        console.log(`Aqui vai uma lista das vandas realizadas em ${dia}: `);

        


            let i = 1;

            for (let item of vendasDoDia) {
                console.log(`\n${i}° Venda:\n`);
                console.log(`Marca: ${item.marcaTenis}`);
                console.log(`Modelo: ${item.modeloTenis}`);
                console.log(`Número: ${item.numeroTenis}`);
                console.log(`Cor: ${item.corTenis}`);
                console.log(`Valor Da Venda: ${item.valorVenda}`);
                console.log(`Vendedor: ${item.vendedorTenis}`);
                console.log(`Data: ${new Date(item.dataVenda).toLocaleDateString()}`);
                console.log(`ID da Compra: ${item.idCompra}\n`);
                i++;
            }

            break;
        
    }   
    
    else {
        console.log('\nSinto muito, não tem venda registrada nesse dia, deseja consultar outro dia?');
        console.log('1. Sim');
        console.log('2. Não');
        let r = Number(ler());

        if(r == 1){
            console.log('Me informe o novo dia');
            dia = new Date(ler());
        }

        else if(r == 2){

            console.log('Voltando para o menu...');
        break;}
    }
}



}