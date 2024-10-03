class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Definindo o tipo de ataque com base no tipo de herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        // Exibindo a mensagem de ataque
        console.log("O", this.tipo, "atacou usando", ataque);
    }
}

// Criando instâncias de heróis
const heroi1 = new Heroi('Gandalf', 200, 'mago');
const heroi2 = new Heroi('Aragorn', 87, 'guerreiro');
const heroi3 = new Heroi('Monge Liu', 45, 'monge');
const heroi4 = new Heroi('Ninja Tatsu', 30, 'ninja');

// Chamando o método atacar para cada herói
heroi1.atacar(); // O mago atacou usando magia.
heroi2.atacar(); // O guerreiro atacou usando espada.
heroi3.atacar(); // O monge atacou usando artes marciais.
heroi4.atacar(); // O ninja atacou usando shuriken.