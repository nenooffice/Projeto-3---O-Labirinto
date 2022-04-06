//P3-Comb se refere as funções de Combate.
//Dentro de combate, temos funções .
//async function start() {

console.clear();

import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
import chalk from 'chalk';

export {index, heaven, choice, inimigo, inominavel, mib};


//------------------------------------------------\\

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms)); 


let index = [];

let heaven = 50

let choice

let inimigo

export class Minion {
  constructor(... args) {
    
   if (heaven < 5){
     this.vida = args[0];
     this.ataque = args[1];
    }
    else if (heaven >= 5 && heaven < 20){
      this.vida = args[0] * 2;
      this.ataque = args[1] * 2;
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
  }
  
  tomouDano(ataque) {
    this.vida -= ataque;
    
  }
  
  danoRebatido() {
    this.vida -= this.ataque;
  }
}

let lista_inimigos = [new Minion(100, 75), new Minion(150, 50)];

let [inimigo_lg, inimigo_cd] = lista_inimigos;


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

let inominavel = new Nameless(10000, 500);

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

 
  
  if (random(lista_inimigos) === inimigo_cd) {
    inimigo_cd = new Minion(100,25);
    await sleep(750);
    console.log('Uma sombra daquele homem se coloca diante de você, e se prepara para atacar.\n');
    await sleep(750);
    console.log('Você ri.\n');
    await sleep(750);
  } 
  else {
    inimigo_lg = new Minion(75,50);
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
        console.log('Você se aproxima do oponente, e comanda a Treva num arco mortal.\n');
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
        console.log('A Treva envolve você,refletindo o ataque infligido no seu oponente.\n');
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
        console.log('Você se delicia com o pavor do seu oponente.\nA Canção da Lua é soprada pelos seus lábios, e você sente sua Força aumentar.\nSeu oponente não existe mais...');
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

await combat();

