class Carro{
    #tanqueAtual
    #km
    #consumo

    constructor(placa, modelo, km, capacidadeCombustivel, consumoKmL) {
        this.placa = placa
        this.modelo = modelo
        this.#km = km
        this.tanqueTotal = capacidadeCombustivel
        this.#tanqueAtual = capacidadeCombustivel
        this.#consumo = consumoKmL
    }

    apresentacao() {
        console.log(`Compre um carro e seja livre para ir onde quiser !`);
    }

    andar(kms) {
        if ((typeof kms === 'number') && (this.#tanqueAtual > kms / this.#consumo)) {
            console.log(`O carro andou ${kms} kms (gastando 1L de gasolina a cada ${this.#consumo} kms)`);
            this.#km += kms
            this.#tanqueAtual -= 1 * kms/this.#consumo
        } else {
            console.log(`O carro não tem combustível para andar ${kms} kms (Consumo: ${this.#consumo}, Tanque atual: ${this.#tanqueAtual})`);
        }
    }

    abastecer(quantidade) {
        if (this.#tanqueAtual + quantidade >= this.tanqueTotal) {
            this.#tanqueAtual = this.tanqueTotal
            console.log(`Você completou o tanque (${this.tanqueTotal} L)`);
        } else {
            this.#tanqueAtual += quantidade
            console.log(`Você abasteceu e agora tem ${this.#tanqueAtual} L`);
        }
    }

    get getKm() {
        return this.#km
    }

    get getTanque() {
        return this.#tanqueAtual
    }

    get getConsumo() {
        return this.#consumo
    }

    set setTanque(valor) {
        if ((valor <= this.tanqueTotal) && (typeof valor === 'number')) {
            this.#tanqueAtual = valor
        }
    }

    set setConsumo(valor) {
        if ((valor > 0) && (typeof valor === 'number')) {
            this.#consumo = valor
        }
    }
}

class Fiesta extends Carro{
    constructor(placa, cor, km) {
        super(placa, 'Fiesta', km, 60, 12)
        this.cor = cor
    }

    apresentacao() {
        console.log(`Fiesta, liberdade e economia !`);
    }
}

class Ferrari extends Carro{
    constructor(placa, cor, km) {
        super(placa, 'Ferrari Enzo', km, 50, 5)
        this.cor = cor
    }

    apresentacao() {
        console.log(`Tenha o prazer de dirigir uma Ferrari !`);
    }
}

const carroGenerico = new Carro('ABCD0000', 'Uno', 1000, 50, 10)
const fiesta = new Fiesta('ABCD0000', 'Cinza', 10000)
const ferrari = new Ferrari('EFGH0000', 'Vermelha', 0)

carroGenerico.apresentacao()
console.log(carroGenerico);
carroGenerico.andar(200)
console.log(carroGenerico.getTanque)
carroGenerico.abastecer(15)
carroGenerico.andar(600)
console.log(carroGenerico.getConsumo);
console.log(carroGenerico.getKm);

fiesta.apresentacao()
console.log(fiesta);
fiesta.andar(200)
console.log(fiesta.getTanque)
fiesta.abastecer(15)
fiesta.andar(600)
console.log(fiesta.getConsumo);
console.log(fiesta.getKm);

ferrari.apresentacao()
console.log(ferrari);
ferrari.andar(200)
console.log(ferrari.getTanque)
ferrari.abastecer(15)
ferrari.andar(600)
console.log(ferrari.getConsumo);
console.log(ferrari.getKm);