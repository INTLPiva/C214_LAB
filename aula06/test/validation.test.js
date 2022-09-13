const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Filme",
        produtora: "ProdutoraDoFilme",
        ano: 2022,
        nota: 10
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        produtora: "ProdutoraDoFilme",
        ano: 2022,
        nota: 10
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
