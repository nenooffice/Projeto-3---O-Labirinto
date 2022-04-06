#!/usr/bion/env node
console.clear();

//Imports de bibliotecas e funções NPM

import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
//import {combat, combatChoice, theMazeKing} from './P3-Combat.js';


let array1 = ['Memoria 1', 'Memoria 2', 'Memoria 3', 'Memoria 4', 'Memoria 5'];
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
 * Variável de controle de Tempo;
 */
let maze = 1;

let timeControl = 1;

let timeChange = ['Você vê o Sol despertar o Labirinto', 'O dia está no ápice quando você encara o céu', 'O manto da Noite cobre o Labirinto'];

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms)); 

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

/* 
* Variáveis de combate;
*/

let choice ;

let inimigo = [];

let inominavel ;

//------------------------------------------------\\

/*
? Arquivos que deveriam ter sido exportados da P3-Comb.js
*/ 

class Minion {
  constructor(... args) {
    
   if (heaven < 5){
     this.vida = args[0];
     this.ataque = args[1];
    }
    else if (heaven >= 5 && heaven < 20){
      this.vida = (args[0]) * 2;
      this.ataque = (args[1]) * 2;
    }
    else if (heaven >= 20 && heaven < 35){
      this.vida = args[0] * 3;
      this.ataque = args[1] * 3;
    }
    else if (heaven >= 35 && heaven < 50){
      this.vida = args[0] * 4;
      this.ataque = args[1] * 4;
    }
    else if (heaven >= 50 && heaven < 65){
      this.vida = args[0] * 5;
      this.ataque = args[1] * 5;
    }
    else if (heaven >= 65 && heaven < 80){
      this.vida = args[0] * 6;
      this.ataque = args[1] * 6;
    }
    else if (heaven >= 80){
      this.vida = args[0] * 10;
      this.ataque = args[1] * 10;
    }
  }
  
  tomouDano(ataque) {
    this.vida -= ataque;
    
  }
  
  danoRebatido() {
    this.vida -= this.ataque;
  }
}


let inimigo_lg ;

let inimigo_cd ;

let lista_inimigos = [inimigo_lg, inimigo_cd];



class ManInBlack {
  constructor (... args) {
    this.vida = args[0];
    this.ataque = args[1];
  }
  receberDano(ataque) {
    this.vida -= ataque;
  }

  absorverStatus(inimigo) {

    if (inimigo.vida <= 25){
      this.ataque += inimigo.ataque;
      this.vida += inimigo.vida;
      inimigo.vida = 0;
    }
  }
  drenarStatus() {

   if (this.vida < 400){
    this.vida += this.ataque;
    }
  }
  danoSofrido(inimigo) {
    this.vida -= (inimigo.ataque / 5);
  }
}

class Nameless {
  constructor (... args) {
    this.vida = args[0];
    this.ataque = args[1];
  }

  tomouDano(ataque) {
    this.vida -= ataque;
  }
  danoRebatido() {
    this.vida -= (this.ataque / 5);
  }
}

inominavel = new Nameless(10000, 500);


function stats(a) {

 

  if (a === mib) {
   
    console.log('Sua vida é '+ chalk.greenBright(a.vida));
    console.log('Seu dano de ataque é ' + chalk.redBright(a.ataque) + '\n');   

  }
  else {
   
    console.log('A vida do oponente é '+ chalk.red(a.vida));
    console.log('O dano de ataque do oponente é ' + chalk.blackBright(a.ataque) + '\n');
  }
}

function resume(a) {

  if (a === mib) {
   console.log ('O inimigo sofreu ' + chalk.red(a.ataque) + ' de dano.\n');
   console.log('Você recuperou  '+ chalk.green(a.ataque) + ' de vida.\n');
  } 
    else if (a === inimigo || a === inominavel) {
      if (choice.darkchoice === 'Abençoado seja Meu Nome') {
        console.log('O inimigo sofreu ' + chalk.red(a.ataque) + ' de dano.\n');
    }
    else {
        console.log ('Você sofreu ' + chalk.red(a.ataque) + ' de dano.\n');
  }}

}


let mib = new ManInBlack(400, 25);

function random(x) {
  index = (Math.floor(Math.random() * x.length));
  return (x[index]);
}

async function combatChoice() {
  choice = await inquirer.prompt({
    name: 'darkchoice',
    type: 'list',
    message: 'Escolha sua ação:',
    choices: [
      'Medo do Escuro',
      'Abençoado seja Meu Nome',
      'Canção da Lua',
      'Verificar Status',
    ],
  });
  return choice.darkchoice;
}

async function combat() {


  console.log('Uma batalha se aproxima...\n');

  await sleep(1000);

  console.clear();

  inimigo = random(lista_inimigos);

  
  if (inimigo === inimigo_cd) {
    inimigo = new Minion(25, 10000);
    await sleep(750);
    console.log('Uma sombra daquele homem se coloca diante de você, e se prepara para atacar.\n');
    await sleep(750);
    console.log('Você ri.\n');
    await sleep(750);
  } 
  else {
    inimigo = new Minion(25,10000);
    await sleep(750);
    console.log('Você vê um resquício da lembrança dele erguer um arco na sua direção.\n');
    await sleep(750);
    console.log('Ousado, não?\n');
    await sleep(750);
  }

  stats(inimigo);
  stats(mib);

  console.log(chalk.bgBlackBright('O oponente inicia a batalha.\n'));
  
  while (inimigo.vida > 0) {
     
    await combatChoice();
    
      const spinner = createSpinner();
        spinner.start();
          await sleep(1750);
        spinner.stop();
              
          console.clear();
    
      if (choice.darkchoice === 'Medo do Escuro') {
        console.log('Você se aproxima do oponente, e comanda a Treva em um ataque mortal.\n');
          inimigo.tomouDano(mib.ataque);
          await sleep(750);
        console.log('O oponente te ataca.\n');
            mib.receberDano(inimigo.ataque);
            mib.drenarStatus();
          await sleep(750);
              resume(inimigo)
              resume(mib)
          await sleep(750);
      }
      else if (choice.darkchoice === 'Abençoado seja Meu Nome') {
        console.log('A Treva envolve você, refletindo o ataque infligido no seu oponente.\n');
        await sleep(750);
        console.log('O oponente te ataca.\n');
        inimigo.danoRebatido();
        await sleep(750);
        resume(inimigo)
        await sleep(750);
      }
      else if (choice.darkchoice === 'Canção da Lua') {
        if (inimigo.vida <= 25) {
        await sleep (750);
        console.log('Você se delicia com o pavor do seu oponente.\n\nA Canção da Lua é soprada pelos seus lábios, e você sente sua Força aumentar.\n\nSeu oponente não existe mais...');
        mib.absorverStatus(inimigo);
        await sleep(750);
        }
        else  {
          console.log('Seu oponente ainda não está fraco o suficiente para ser absorvido...');
          await sleep(750);
        }
      }
      else if (choice.darkchoice === 'Verificar Status') {
        stats(mib);
        stats(inimigo);
      }

    if (mib.vida <= 0) {
      console.log('\nVocê não compreendeu seus poderes ainda...\n');
      break;
    }
  }
  if (inimigo.vida <= 0) {
    console.log('\nVocê se apoderou de mais uma memória...\n');
    chalk.bgGreenBright(stats(mib));
    await sleep(750);
  }
}

async function theMazeKing()  {

  console.log('O Inominável encara você:\n');
    await sleep(1000);
  console.log('\n"Você não pode vencer aquele que todos temem."\n');
    await sleep(1000);
  console.log('\nVocê ri. As palavras dele não importam.\n');
    await sleep(1000);
  console.log('\nNada mais importa.\n');
    await sleep(3000);
  console.clear();

  while (inominavel.vida > 0) {

  await sleep (1000);  
  stats(inominavel);
  await sleep (1000);
  stats(mib);
  await sleep (1500);
  console.log(chalk.bgBlackBright('O Inominável ataca Você.\n'));
  await sleep(1000);

    await combatChoice();
    
      const spinner = createSpinner();
        spinner.start();
          await sleep(1750);
        spinner.stop();
              
          console.clear();
    
      if (choice.darkchoice === 'Medo do Escuro') {
        console.log('Você se aproxima do oponente, e comanda a Treva num arco mortal.\n');
          inominavel.tomouDano(mib.ataque);
          await sleep(750);
        console.log('O oponente te ataca.\n');
            mib.receberDano(inominavel.ataque);
            mib.drenarStatus();
          await sleep(750);
              resume(inominavel)
              resume(mib)
          await sleep(750);
      }
      else if (choice.darkchoice === 'Abençoado seja Meu Nome') {
        console.log('A Treva envolve você,refletindo o ataque infligido no seu oponente.\n');
        await sleep(750);
        console.log('O oponente te ataca.\n');
        inominavel.danoRebatido();
        mib.danoSofrido(inominavel);
        await sleep(750);
        resume(inominavel);
        await sleep(750);
      }
      else if (choice.darkchoice === 'Canção da Lua') {
        if (inominavel.vida <= 25) {
        await sleep (750);
        console.log('Você se delicia uma última vez, se alimentando do medo daquele ser sem Nome.');
        mib.absorverStatus(inominavel);
        await sleep(750);
        }
        else  {
          console.log('"DHO-HNA"\n');
          await sleep(750);
        }
      }
      else if (choice.darkchoice === 'Verificar Status') {
        stats(mib);
        stats(inominavel);
      }

      if (mib.vida <= 0) {
        console.log('"ph’nglui mglw’nafh Cthulhu R’lyeh wgah’nagl fhtagn..."\n');
        await sleep (1500);
        console.log('As palavras sem sentido, ditas num dialeto que você não entende, se afundam junto a você...\n');
        await sleep (1000);
        console.log('...Conforme você se perde no Horror Cósmico que acabou de presenciar...\n');
        break;
      }
    }
    if (inominavel.vida <= 0) {
      console.log('\nNinguém há de se lembrar do Nome dele.\n');
    }

}


//------------------------------------------------\\

//------------------------------------------------\\
/*
! INÍCIO FUNÇÕES DE INCREMENTO VISUAL NOS TEXTOS !
*/

/*
* * Funções de animação de texto (chalkAnimation);
*/

async function text_glitch(text){
  const glitch = chalkAnimation.glitch(text);
  await sleep(2000);
  glitch.stop();
}

async function text_radar(text){
  const radar = chalkAnimation.radar(text);
  setTimeout(() => {
  radar.stop();
  }, 5000);
}

/*
! FIM FUNÇÕES DE INCREMENTO VISUAL NOS TEXTOS !
*/

//------------------------------------------------\\
/*
! INÍCIO FUNÇÕES DE MENU !
*/


/*
 * Função de Menu;
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
   
  } else  if (op.opçoes == 'Sair do Jogo' || treva.dark == 'Sair' ){
    console.log("Obrigado por jogar meu jogo.");
    await sleep(3000);
    console.clear();
 }
}


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

  if (x == 'Forma é vazio, vazio é forma'){ //NAO ESQUECER DE MUDAR A SENHA!!!
      
      spinner.success()
      console.log('\n', 'Acesso permitido', '\n');

  } else {
  await sleep(1000);
    spinner.error()
    console.log('\n', 'Acesso negado', '\n');
    process.exit(1);
  }
  
}

/* 
* Função BlueEdTechVersion
*/

async function blueEdTechVersion() {

  heaven = 1;
    
  for (; heaven < 1000; heaven++) {



  if (heaven % 5 == 0){
    ct++;
  }
  if (timeControl > 3){
    ct = 1;
  }  
  
  const destino = await Darkness();  
  
  if (destino == 'Seguir seu Caminho'){
    await combat();
  }
  else if (destino == 'Observar o Labirinto'){    
    console.log(random(array1));
  }
  else if (destino == 'Esperar'){
    ct ++;
    
    if (ct % 3 == 0){
      console.log(timeChange[2]);
    } else if (ct % 2 == 0){
      console.log(timeChange[1]);
    } else {
      console.log(timeChange[0]);
    }
  }
    if (mib.ataque >= 10000){
    console.clear();
    await sleep(1000);
    await theMazeKing();
    break;
  }
    }
}



  



/*
! FIM FUNÇÕES DE MENU !
*/ 

//------------------------------------------------\\
/*
! INÍCIO FUNÇÕES DE ESCOLHA !
*/

/* 
* Função Escolhas Homem de Preto
*/

async function Darkness() {
  const treva = await inquirer.prompt({
    name: 'dark',
    type: 'list',
    message: 'O que você deseja fazer?',
    choices: [
      'Seguir seu Caminho',
      'Observar o Labirinto',
      'Esperar',
    ],
  });
  return treva.dark;
}


async function begin() {

  while (exit !== true){

  await inicio();
  
  if (s.MenuInicial == 'Iniciar'){
  //await startGame();
  console.log('Esse sistema ainda não está disponível');
  }
  else if (s.MenuInicial == 'Carregar'){
  // await loadGame();
  console.log('Esse sistema ainda não está disponível');
  } 

  else if (s.MenuInicial == 'Area BlueEdTech'){

  await blueEdTech()
  
    text_glitch('Você se cobre com a Treva...\n');
    await sleep(3000);
    console.clear(); 
      await blueEdTechVersion()   
    }
  }
}


//------------------------------------------------\\

await begin();

