import prompt from "prompt-sync"
const ler = prompt();



export async function contar(limite) {
    for (let contador = 0; contador <= limite; contador++) {
      await sleep(500);
    }
  }
  
  
  function sleep(milisegundos) {
    return new Promise((ok, nok) => {
      setTimeout(ok, milisegundos);
    })
  }

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
      -   5. Listar Por Vendedor         -
      -   6. Listar Por Marca            -
      -   7. Listar Por Valor            -
      -   0. Sair Do Programa            -
      ---------------------------------`);
      
  } 
  export  function registrarVenda(vendas) {

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

export  function cancelarVenda(vendas){
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

export  function listarDia(vendas){
    
    for(let i =1; i != 0; i++){
        
        console.log(`me informe o dia que você deseja a lista de vendas`);
        let dia = new Date(ler());
        let diaDi = dia.toDateString();


    

  // Filtra as vendas do dia desejado
  let vendasDoDia = vendas.filter(v => v.dataVenda.toDateString() === diaDi);

  if (vendasDoDia.length > 0) {
        console.log(`Aqui vai uma lista das vandas realizadas em ${dia.toLocaleDateString()}: `);

        


            let a = 1;

            for (let item of vendasDoDia) {
                console.log(`\n${a}° Venda:\n`);
                console.log(`Marca: ${item.marcaTenis}`);
                console.log(`Modelo: ${item.modeloTenis}`);
                console.log(`Número: ${item.numeroTenis}`);
                console.log(`Cor: ${item.corTenis}`);
                console.log(`Valor Da Venda: R$ ${item.valorVenda}`);
                console.log(`Vendedor: ${item.vendedorTenis}`);
                console.log(`Data: ${(item.dataVenda).toLocaleDateString()}`);
                console.log(`ID da Compra: ${item.idCompra}\n`);
                a++;
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

export  function listarPeriodo(vendas){

    
    console.log('\nMe informe a data de início que você deseja realizar a busca');
    let dataComeco = new Date(ler());
    
    console.log('\nMe informe a data final que você deseja realizar a busca');
    let datafim = new Date(ler());

    //Vai fazer tipo uma array onde estaram filtradas todas as vendas entre a data de inicio e a de fim
    //  deixando mais facil de retornar  com exatidão
    let dataPeriodo = vendas.filter(v =>{
      return v.dataVenda >= dataComeco && v.dataVenda <= datafim; 
    });

    if(dataPeriodo.length > 0){

        console.log('\nAqui vai uma lista de todas as vendas realizada nesse periodo:\n ');
        let a = 1;
      for(let item of dataPeriodo){
        console.log(`\n${a}° Venda:\n`);
        console.log(`Marca: ${item.marcaTenis}`);
        console.log(`Modelo: ${item.modeloTenis}`);
        console.log(`Número: ${item.numeroTenis}`);
        console.log(`Cor: ${item.corTenis}`);
        console.log(`Valor Da Venda: R$ ${item.valorVenda}`);
        console.log(`Vendedor: ${item.vendedorTenis}`);
        console.log(`Data: ${(item.dataVenda).toLocaleDateString()}`);
        console.log(`ID da Compra: ${item.idCompra}\n`);
        a++;
      }
      
    }
    else{
        console.log(`Não temos vendas entre ${dataComeco.toLocaleDateString()} e ${datafim.toLocaleDateString()}`);
    }



}

export function listarVendedor(vendas){
    console.log('\nMe informe o vendedor que você deseja consultar as vendas');
    let ven = ler();

for(let i =1; i != 0; i++){
    let vendasVen = vendas.filter(v =>{
        return v.vendedorTenis === ven;
    });

    if(vendasVen.length > 0){
        let a = 1;
        for(let item of vendasVen){
            console.log(`\n${a}° Venda:\n`);
            console.log(`Marca: ${item.marcaTenis}`);
            console.log(`Modelo: ${item.modeloTenis}`);
            console.log(`Número: ${item.numeroTenis}`);
            console.log(`Cor: ${item.corTenis}`);
            console.log(`Valor Da Venda: R$ ${item.valorVenda}`);
            console.log(`Vendedor: ${item.vendedorTenis}`);
            console.log(`Data: ${(item.dataVenda).toLocaleDateString()}`);
            console.log(`ID da Compra: ${item.idCompra}\n`);
            a++;
          }
          break
    }
    else{
        console.log('\nEsse vendedor ainda não realizou nenhuma venda');
        console.log('Você deseja consultar outro vendedor?\n1. Sim\n2. Não');
        let r = Number(ler());

        if(r == 1){
            console.log('\nMe informe o nome do vendedor ');
            ven = ler();
        }
        else{
            console.log('Voltando para o menu...');
            break;
        }

    }}
}

export function listarMarca(vendas){
    console.log('\nMe informe a marca que você deseja uma lista das vendas');
    let m = ler();

    for(let i = 1; i != 0; i++){
    let vendasMarca = vendas.filter(v => {
        return v.marcaTenis === m;
    });

    if(vendasMarca.length > 0){
        console.log('\nAqui vai uma lista das vendas Feitas da marca ' +m);

        let a = 1;
        for(let item of vendasMarca){
            console.log(`\n${a}° Venda:\n`);
            console.log(`Marca: ${item.marcaTenis}`);
            console.log(`Modelo: ${item.modeloTenis}`);
            console.log(`Número: ${item.numeroTenis}`);
            console.log(`Cor: ${item.corTenis}`);
            console.log(`Valor Da Venda: R$ ${item.valorVenda}`);
            console.log(`Vendedor: ${item.vendedorTenis}`);
            console.log(`Data: ${(item.dataVenda).toLocaleDateString()}`);
            console.log(`ID da Compra: ${item.idCompra}\n`);
            a++;
        }
        break;
    }
    
    else{
        console.log('\nNenhum item dessa marca foi vendido ');
        console.log('Deseja tentar uma outra marca?\n1. Sim\n2. Não ');
        let r = Number(ler());

        if(r == 1){
            console.log('\nMe informe a marca');
            m = ler();

        }

        else{
            console.log('\nVoltando para o Menu..');
            break;

        }
    }
}
}

export function listarPorPreco(vendas){
    console.log('\nMe informe o Preço de inicio para eu retornar as vendas');
    let pInicio = Number(ler());
    
    console.log('\nMe informe o Preço de fim para eu retornar as vendas');
    let pFinal= Number(ler());
    for(let i =1; i != 0; i++){

    let vendasValor = vendas.filter(v => {
        return v.valorVenda >= pInicio && v.valorVenda <= pFinal;
    });

    if(vendasValor.length > 0){

        console.log('Aqui vai uma lista das vendas feitas nesses valores');
        let a = 1;
        for(let item of vendasValor){
            console.log(`\n${a}° Venda:\n`);
            console.log(`Marca: ${item.marcaTenis}`);
            console.log(`Modelo: ${item.modeloTenis}`);
            console.log(`Número: ${item.numeroTenis}`);
            console.log(`Cor: ${item.corTenis}`);
            console.log(`Valor Da Venda: R$ ${item.valorVenda}`);
            console.log(`Vendedor: ${item.vendedorTenis}`);
            console.log(`Data: ${(item.dataVenda).toLocaleDateString()}`);
            console.log(`ID da Compra: ${item.idCompra}\n`);
            a++;
        }
        break;
    }

    else{
        console.log('\nNão temos vendas feitas nessa faixa de preço');
        console.log('\nDeseja consultar outra FAixa de preço?\n1. Sim 2. Não');
        let r = Number(ler());

        if(r ==1){
            console.log('Me informe o valor de inicio');
            pInicio = Number(ler());
            
            console.log('Me informe o valor de final');
            pFinal = Number(ler());

        }

        else{
            console.log('Voltando para o menu... ');
            break;
        }
    }
}
}
