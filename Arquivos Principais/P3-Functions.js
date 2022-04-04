#!/usr/bion/env node

console.clear();


import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

import { minion1 } from './P3-Comb.js';


 /**
  * * Funções;
  * * Funções de randomização (math.random);
  * * Funções de animação (chalkAnimation);
  * todo: Funções de combate;
  * todo: Funções de exploração;
  * ? Função de movimentação/criação do Labirinto;
  * todo: Função do Menu;
  * todo: Função de combatRandom;
  * todo: Função de push/splice;
  * todo: Função de Ambiente;
  * todo: Função de sair do jogo;
  * todo: Função de save/load;  
  * ? Save?
  */

/** 
 * ?Variáveis de teste;
 */

const teste = ["O Labirinto devora você", "Você se afoga no Oceano", "Você se esquece no Deserto", "Você se desola na Cidade", "Você se desespera na Floresta", "Você se perde no Vazio", "DROWNDROWNDRONWDRONWDRONWDROWNDROWNDROWNDRONWDRONWDRONWDROWN"];

let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];
let array3 = [11,12,13,14,15];
let array4 = [16,17,18,19,20];
let array5 = [21,22,23,24,25];

let journal1 = [];
let journal2 = [];
let journal3 = [];
let journal4 = [];
let journal5 = [];
let journal6 = [];
let journal7 = [];
let journal8 = [];
let journal9 = [];
let journal10 = [];

/**
 * Varriável de armazenamento de história;
 */
let journalEntry = [journal1,journal2,journal3,journal4,journal5];
/**
 * Variável de armazenamento de Itens;
 */
let journalItens = [];
/**
 * Variável de controle de entradas;
 */
let journal = '';
/**
 * Variável Inventário;
 */
let inv = '';

/**
 * Variável de controle de Tempo e rodadas dentro do Labirinto;
 */
let maze = 1;

let timeControl = 1;

let timeChange = ['Manha', 'Tarde', 'Noite', 'Madrugada'];

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms)); ;

/**
 * Variável de Indexamento randômico;
 */
let index = [];

let randomChoice = ['Combate', 'Exploração'];

/**  
 *  Variável de saída
 */

let exit = '';

let s = '';

let op = '';

let bet = '';

/**
 * Novas variáveis de teste;
 */

 let ct = 0;

 let ceu = ['O Labirinto se aquece com as cores pastéis do Amanhecer', 'O Sol queima tão forte quanto a loucura do Labirinto', 'O manto da Noite se espalha pelos corredores infinitos.']
 
 let heaven = 1;

/*
* Varíavel ambientes;
*/

let entrada = '';


/** 
 * !FIM DAS VARIÁVEIS DE TESTE
 */








/**
 * * Função de randomização (math.random);
 */

 function random(x) {
  index = (Math.floor(Math.random() * x.length));
 }

/**
 * * Fim da Função de randomização (math.random);
 */





/**
 * * Funções de animação de texto (chalkAnimation);
 * ? Radar está muito rápido
 */

function text_glitch(text){
    const glitch = chalkAnimation.glitch(text);
  
//   setTimeout(() => {
//     glitch.stop(); 
// }, 500000); 

}

function text_radar(text){
  const radar = chalkAnimation.radar(text);
  setTimeout(() => {
    radar.stop();
}, 5000);
}

/**
 * * Fim das Funções de animação de texto (chalkAnimation);
 */

/**
 * * Função de combate;
 */

/**
 * * Fim da função de combate;
 */

/**
 * * Função de exploração;
 */

 async function explore(){
  const exp = await inquirer.prompt({
    name: 'explore',
    type: 'list',
    message: 'O que você deseja fazer?',
    choices: [
      'Observar',
      'Interagir',
      'Recuperar',
      'Seguir em Frente',
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
  }
  else if (exp.explore == 'Interagir'){
    console.log('Se o objeto não puder sofrer interação, exibir texto de interação não permitida');
    console.log('Interação ja foi feita? Se sim, exibir msg correspondente. Se não continuar.');
    console.log('Interação exige item? Se sim, verificar se o item está no inventário' + 'Mensagem de confirmação de interação');
    console.log('Se não, realizar interação')
  } 
  else if (exp.explore == 'Recuperar') {
    console.log('Se o objeto não puder ser recuperado, exibir texto de recuperação não permitida');
    console.log('Recuperação ja foi feita? Se sim, exibir msg correspondente. Se não continuar.');
    console.log('Se não, realizar recuperação');
  }
  else if (exp.explore == 'Seguir em Frente'){
    console.log('Você segue seu caminho.');
    maze ++;
  }
}

/**
 * * Fim da função de exploração;
 */

/**
 * * Função de controle de tempo;
 */

function tc(){

  if (maze % 5 == 0){
    timeControl++;
  } 
  if (timeControl > 3){
    timeControl = 1;
  }
}

/**
 * * Fim da função de controle de tempo;
 */



/** 
 * * Função de movimentação/criação do Labirinto;
 * ? Criar variável de controle de tempo;
*/

async function wayChoice() {
  const answers = await inquirer.prompt({
    name: 'wayChoice',
    type: 'list',
    message: 'O que você deseja fazer?',
    choices: [
      'Ir para a Direita',
      'Ir para a Esquerda',
      'Ir para a Frente',
      'Olhar para cima',
      'Inventário',
      'Opções',
    ],
  });
  return answers.wayChoice;
}
async function startGame(){

  console.log('Intro');
  
  for (; maze < 10; maze++) { 


    /** * Controle de tempo para criação do Labirinto; */
    if (maze % 5 == 0){
      timeControl++;
    }
    if (timeControl > 3){
      timeControl = 1;
    }
  
  
  const choice = await wayChoice();               
  
  /**
   * ! Aleatoriedade na entrada dos Ambientes
   */
      if (choice == 'Opções'){
        await options();
        maze --;
      
      } 
      else if (choice == 'Inventário'){
        await inventory();
        maze --;
      } 
      
      else if (choice == 'Olhar para cima'){
        if (timeControl % 3 == 0){
          console.log(timeChange[2]);
        } else if (timeControl % 2 == 0){
          console.log(timeChange[1]);
        } else {
          console.log(timeChange[0]);
        }
        maze --;
        
      }
      
      else if (choice == 'Ir para a Direita' || choice  == 'Ir para a Esquerda' || choice == 'Ir para a Frente'){
        await random(randomChoice);
        if (randomChoice[index] == 'Combate'){
          console.log("Voce entrou em Combate");
          
        } 
        
        else if (randomChoice[index] !== 'Combate'){
          console.log('Você entrou em Exploração\n');
          // await explore();
        }
      }
     
  
      // if (maze >= 20){
      //   console.log("Você encontra uma entrada para o Oceano");
      //   await enterChoice();
      //   console.log(entrada);
      //   if (entrada.enterChoice == 'Entrar'){
      //     console.log("Você entrou no Oceano");
      //     await ocean();
      //   } else if (entrada.enterChoice == 'Seguir seu Caminho'){
      //     console.log("Você voltou para o Labirinto");
      //     break
      //   }  
      // }
  
  // console.log('controle do tempo ' + timeControl);
  // console.log('rodada do labirinto ' + maze);
  
  exit = true;
  if (op.opçoes == 'Sair do Jogo' ){
        break;
      }
}
  

}



/**
 * * Fim da função de movimentação/criação do Labirinto;
 */

/**
 * * Função de Menu;
 */
 
async function inventory(){
  const inv =  await inquirer.prompt({
   name: 'inventory',
   type: 'list',
   message: 'O que você deseja fazer?',
   choices: [
     'Ver Diário',
     'Ver Itens',
     'Voltar',
   ],
 });
 if (inv.inventory == 'Ver Diário'){
  while (true){
    const journal =  await inquirer.prompt({
      name: 'journal',
      type: 'list',
      message: 'Escolha a página do Diário',
      choices: [
        'Pagina 1',
        'Pagina 2',
        'Pagina 3',
        'Pagina 4',
        'Pagina 5',
        'Voltar',
      ],
    });
    
    if (journal.journal == 'Pagina 1'){
      console.log(journal1, '\n', journal2);
    } else if (journal.journal == 'Pagina 2'){
      console.log('\n', journal3, '\n', journal4);
    } else if (journal.journal == 'Pagina 3'){
      console.log('\n', journal5, '\n', journal6);
    } else if (journal.journal == 'Pagina 4'){
      console.log('\n', journal7, '\n', journal8);
    } else if (journal.journal == 'Pagina 5'){
      console.log('\n', journal9, '\n', journal10);
    } 
    
    if (journal.journal == 'Voltar'){
      break;
    }
  }

 } else  if (inv.inventory == 'Ver Itens'){
   console.log(journalItens);
 } 
}


 async function options(){
  op =  await inquirer.prompt({
   name: 'opçoes',
   type: 'list',
   message: 'Salve seu progresso ou Encerre o Jogo',
   choices: [
     'Salvar',
     'Sair do Jogo',
   ],
 });
 if (op.opçoes == 'Salvar'){
   console.log("Salvo");
   console.log("Obrigado por jogar meu jogo.");
  } else  if (op.opçoes == 'Sair do Jogo' || treva.dark == 'Sair' ){
   await sleep(3000);
   console.clear();
 }
}



/**
 * * Fim da função de Menu;
 */

/**
 * * Função de combatRandom;
 */

/**
 *  * Fim da função de combatRandom;
 */

/**
 * * Função de push/splice;
 */
function insert() {
  inv.push(x[index]);
  x.splice(index, 0);
  inv[index] = x[index];
}
/**
 * * Fim da função de push/splice;
 */

/**
 * * Função de Ambiente;
 */

 async function ocean () {
   const oc = await inquirer.prompt({
    name: 'ocean',
    type: 'list',
    message: 'O que você deseja fazer?',
    choices: [
      'Embarcar',
      'Explorar',
    ],
  });
  if (oc.ocean == 'Embarcar'){
    await navigate();
  } else if (oc.ocean == 'Explorar'){
    await explore();
  }

}

/**
 * * Fim da função de Ambiente;
 */

/**
 * * Função de começar o jogo;
 */

/**
 * * Fim da função de começar o jogo;
 */

/**
 * * Função de save/load;
 */

//  const { log } = console
//  const { writeFileSync } = require('fs')
//  const json = require('./a.json')
 
//  log(json.vida)
//  json.vida = 100
 
//  writeFileSync('./a.json', JSON.stringify(json, null, 2))

 /**
 * * Fim da função de save/load;
 */

/*
  * * Função de Escolha;
  */

async function enterChoice() {
  const entrada = await inquirer.prompt({
    name: 'entrada',
    type: 'list',
    message: 'O que você deseja fazer?',
    choices: [
      'Entrar',
      'Seguir seu Caminho',
    ],
});
return entrada.enterChoice;
}

/* 
* Fim da função de Escolha;
*/


/*
* Função Menu Inicial
*/
async function inicio() {
  s = await inquirer.prompt({
    name: 'MenuInicial',
    type: 'list',
    choices: [
      'Iniciar',
      'Carregar',
      'Area BlueEdTech',
    ],
});

return s;
}
/* 
* Fim da função Menu Inicial;
*/

/*
* Função Menu BlueEdTech
*/

async function blueEdTech() {
  bet = await inquirer.prompt({
    name: 'blueEdTech',
    type: 'input',
    message: 'Digite a senha:',
});

  return correto(bet.blueEdTech);
} 

 async function correto(x) {

   const spinner = createSpinner('Conferindo a resposta...').start();
   await sleep(1000);

  if (x == '1'){
      
      spinner.success()
      console.log('\n', 'Acesso permitido', '\n');

} else {
  setTimeout(() => {
    spinner.error()
    console.log('\n', 'Acesso negado', '\n');
    process.exit(1);
  }, 1000); 
  
}}


//----------------------------------------------------------------------
//MainCode



let ganharAtk = 0;


//----------------------------------------------------------------------

while (exit !== true){

  await inicio();
  
  if (s.MenuInicial == 'Iniciar'){
  await startGame();
  
}
 else if (s.MenuInicial == 'Carregar'){
  // await loadGame();
  console.log('Esse sistema ainda não está disponível');
} 

else if (s.MenuInicial == 'Area BlueEdTech'){

   await blueEdTech()
   
  //  text_glitch('Você se cobre com a Treva...\n');
   
   await sleep();

   console.clear(); 

   await blueEdTechVersion()


   
  }
}



/* BlueEdTechVersion
* Novas variáveis
*/

//OBJETOS




async function blueEdTechVersion() {
 
while (ganharAtk <= 19){

  heaven = 1;
    
  for (; heaven <= 10; heaven++) {

    console.log(heaven);
    console.log(ganharAtk);
    console.log(minion1.essencia);
  
    if (heaven % 5 == 0){
      ct++;
    }
    if (timeControl > 3){
      ct = 1;
    }  
  
  const destino = await Darkness();  
  
  if (destino == 'Seguir seu Caminho'){
    console.log('Combate');
    ganharAtk ++;
  }
  else if (destino == 'Observar o Labirinto'){    
    console.log('Observar');
  }
  else if (destino == 'Esperar'){
    ct ++;
    heaven += 4;
 }

 else if (destino == 'Esperar'){
  if (ct % 3 == 0){
    console.log(ceu[2]);
  } else if (ct % 2 == 0){
    console.log(ce[1]);
  } else {
    console.log(ceu[0]);
  }

  
  
}}
 
}
 if (ganharAtk == 20){
  console.log('Você enfrenta o Inominavel');
 }
}


//Darkness

async function Darkness() {
  const treva = await inquirer.prompt({
    name: 'dark',
    type: 'list',
    message: 'O que você deseja fazer?',
    choices: [
      'Seguir seu Caminho',
      'Observar o Labirinto',
      'Esperar',
      'Sair',
    ],
});
return treva.dark;
}

