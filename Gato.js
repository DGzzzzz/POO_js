function Animal(raca, nome, cor) {
    this.raca = raca;
    this.nome = nome;
    this.cor = cor;
}

function Gato(raca, nome, cor) {
    Animal.call(this, raca, nome, cor)
}

const gato1 = new Gato("Gato","Ted", "malhado");
console.log(gato1)

const gato2 = new Gato("Gato", "Flora", "branco com preto");
console.log(gato2);

function Cachorro(raca, nome, cor) {
    Animal.call(this, raca, nome, cor)
}

const cachorro1 = new Cachorro("Cachorro", "bob", "caramelo");
console.log(cachorro1);