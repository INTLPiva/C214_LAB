  class Empresa {
    constructor(nome, cnpj, qtdFuncionarios) {
      this.nome = nome;
      this.cnpj = cnpj;
      this.qtdFuncionarios = qtdFuncionarios;
    }

    getNome() {
        return this.nome;
    }

    getCnpj() {
        return this.cnpj;
    }

    getQtdFuncionarios() {
        return this.qtdFuncionarios;
    }
  }

  const empresa = new Empresa("LASTech", "12.123.123/0001-12", 4);

  console.log("Nome: ", empresa.getNome());

  console.log("CNPJ: ", empresa.getCnpj());

  console.log("Quantidade de Funcionários: ", empresa.getQtdFuncionarios());
