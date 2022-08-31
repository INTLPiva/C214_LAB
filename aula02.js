class Veiculo {
    placa = String;
    ano = Number;

    constructor(placa, ano) {
        this.placa = placa;
        this.ano = ano;
    }

    setPlaca(novaPlaca) {
        this.placa = novaPlaca;
    }

    setAno(novoAno) {
        this.ano = novoAno;
    }

    getPlaca() {
        console.log("Placa: ", this.placa)
    }

    getAno() {
        console.log("Ano: ", this.ano)
    }

    exibirDados() {
        console.log("Placa: ", this.placa)
        console.log("Ano: ", this.ano)
    }
}

class Caminhao extends Veiculo {
    eixos = Number;

    constructor(placa, ano, eixos) {
        super(placa, ano);
        this.eixos = eixos;
    }

    setEixos(novosEixos) {
        this.eixos = novosEixos
    }

    getEixos() {
        console.log("Eixos: ", this.eixos)
    }

    exibirDados() {
        console.log("Placa: ", this.placa)
        console.log("Ano: ", this.ano)
        console.log("Eixos: ", this.eixos)
    }
}

class Onibus extends Veiculo {
    assentos = Number;

    constructor(placa, ano, assentos) {
        super(placa, ano);
        this.assentos = assentos;
    }

    setAssentos(novosAssentos) {
        this.assentos = novosAssentos
    }

    getAssentos() {
        console.log("Assentos: ", this.assentos)
    }

    exibirDados() {
        console.log("Placa: ", this.placa)
        console.log("Ano: ", this.ano)
        console.log("Assentos: ", this.assentos)
    }
}
