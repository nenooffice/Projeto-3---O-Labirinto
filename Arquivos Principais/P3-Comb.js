//P3-Comb se refere as funções de Combate.
//Dentro de combate, temos funções .
//async function start() {

let heaven = 0
// let a = '';
// let b = '';

class minion {
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

  tomouDano() {
    this.vida - 50;
}}

class manInBlack {
  constructor (... args) {
    this.vida = args[0];
    this.ataque = args[1];
}}


const mib = new manInBlack(100, 25);

let inimigo = new minion(100, 25);


//make a function that will return the result of the attack


/*
* Puxar minion1 no começo da função de combate.
*/


console.log(heaven, inimigo.vida, inimigo.ataque);

console.log((inimigo.tomouDano()));

console.log(heaven, inimigo.vida, inimigo.ataque);

// heaven += 15

// minion1 = new minion(100, 25);
// console.log(heaven, minion1.vida, minion1.ataque);

// heaven += 15

// minion1 = new minion(100, 25);
// console.log(heaven, minion1.vida, minion1.ataque);

// heaven += 15

// minion1 = new minion(100, 25);
// console.log(heaven, minion1.vida, minion1.ataque);

// heaven += 15

// minion1 = new minion(100, 25);
// console.log(heaven, minion1.vida, minion1.ataque);

// heaven += 15

// minion1 = new minion(100, 25);
// console.log(heaven, minion1.vida, minion1.ataque);