//P3-Obj se refere aos Objetos utilizados dentro do Jogo.
//Os objetos são separados em 4 categorias:
//1. Itens de Ataque;
//2. Itens de Defesa;
//3. Itens Utilizáveis;
//4. Itens Únicos;
//Além dos ObjetosItens, temos Objetos Personagens:
//1. Player;
//2. Enemies;
//3. Bosses;

class Player {
  constructor(... args) {
    this.vida = args[0]
    this.ataque = args[1]
    this.sanidade = args[2]
    this.esquecimento = args[3] || 0
    this.luto = args[4] || 0
    this.frio = args[5] || 0  
  }
}

if (maze <= 25) {
  const player1 = new Player(100, 10, 100, 0, 0, 0)
} else if (maze >= 25 && maze <= 30) {
  const player2 = new Player(100, 25, 100, 0, 0, 0)
}

//Itens de Ataque:
//1. Lâmina;