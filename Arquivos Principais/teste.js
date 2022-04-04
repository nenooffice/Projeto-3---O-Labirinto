class Enemy {
  constructor(a) {
    this.vida = a.vida
    this.ataque = a.ataque
    this.insanidade = a.insanidade || 0
  }

  tomouDano() {
    this.vida--
  }
}

const inimigo1 = new Enemy({
  vida: 50,
  ataque: 25,
  insanidade: 0
})

inimigo1.tomouDano()

//arg

class Enemy1 {
	constructor(... args) {
		this.vida = args[0]
		this.ataque = args[1]
		this.insanidade = args[2] || 0
	}
}

const inimigo2 = new Enemy1(50, 25, 0)

//spread

class Enemy3 {
	constructor(vida, ataque, insanidade) {
		this.vida = vida
		this.ataque = ataque
		this.insanidade = insanidade || 0
	}
}