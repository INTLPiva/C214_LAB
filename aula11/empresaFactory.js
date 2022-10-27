const Empresa = (nome, cnpj, qtdFuncionarios) => ({
    nome,
    cnpj,
    qtdFuncionarios,
    getNome: () => nome,
    getCnpj: () => cnpj,
    getQtdFuncionarios: () => qtdFuncionarios,
})

const empresa = Empresa('LASTech', "12.123.123/0001-12", 4);

console.log("Nome: ", empresa.getNome());

console.log("CNPJ: ", empresa.getCnpj());

console.log("Quantidade de Funcionários: ", empresa.getQtdFuncionarios());
