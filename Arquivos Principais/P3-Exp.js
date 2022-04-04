//P3-Exp se refere as funções de Exploração.
//As opções de Exploraçã são:
//1. Observar;
//2. Interagir;
//3. Recuperar;
//4. Seguir em frente;
//Cada escolha dentro da função "explore" é uma Ação de Movimentação.

/* */

import inquirer from 'inquirer';
import figlet from 'figlet';

console.clear();

async function explore(){
  const exp = await inquirer.prompt({
    name: 'explore',
    type: 'list',
    message: 'O que você deseja fazer?',
    choices: [
      'Observar',
      'Interagir',
      'Recuperar',
      'Voltar',
    ], });
  if (exp.explore == 'Observar'){
    console.log('Observar Sanidade');
    console.log('Se maze <= 15' + ('Executar função randomica em cima de array1 ' + 'exibir texto selecionado de dentro da array' + 'executar função de splice + push' ));
    console.log('Se maze >= 15 && maze <= 30' + ('Executar função randomica em cima de array2 ' + 'exibir texto selecionado de dentro da array' + 'executar função de splice + push' ));
    console.log('E por assim em diante'); 
    console.log('Se o objeto for possivel de ser alterado, array de objetos possiveis de ser alterados');
    console.log('Se o objeto for um item, descrição de item (array de itens)');
    /* 
    ? Fazer função para seleção das arrays corretas?
    ? Mistérios prolongados ao longo do jogo?
    */
  } else if (exp.explore == 'Interagir'){
    console.log('Se o objeto não puder sofrer interação, exibir texto de interação não permitida');
    console.log('Interação ja foi feita? Se sim, exibir msg correspondente. Se não continuar.');
    console.log('Interação exige item? Se sim, verificar se o item está no inventário' + 'Mensagem de confirmação de interação');
    console.log('Se não, realizar interação')

  } else if (exp.explore == 'Recuperar') {
    console.log('Se o objeto não puder ser recuperado, exibir texto de recuperação não permitida');
    console.log('Recuperação ja foi feita? Se sim, exibir msg correspondente. Se não continuar.');
    console.log('Se não, realizar recuperação');
  }

}