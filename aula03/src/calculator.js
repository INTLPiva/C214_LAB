const validate = require('validate.js');
const NumberConstraint = require('./validate');

const Calculator = {
    soma(n1, n2) {
        const validateN1 = validate({ n1 }, NumberConstraint.numberConstraint);
        if (validateN1 !== undefined) {
            return 'Error';
        }

        const validateN2 = validate({ n2 }, NumberConstraint.numberConstraint);
        if (validateN2 !== undefined) {
            return 'Error';
        }

        let op1 = n1 + n2;
        return op1;
    },

    subtracao(n1, n2) {
        const validateN1 = validate({ n1 }, NumberConstraint.numberConstraint);
        if (validateN1 !== undefined) {
            return 'Error';
        }

        const validateN2 = validate({ n2 }, NumberConstraint.numberConstraint);
        if (validateN2 !== undefined) {
            return 'Error';
        }

        let op2 = n1 - n2;
        return op2;
    },

    multiplicacao(n1, n2) {
        const validateN1 = validate({ n1 }, NumberConstraint.numberConstraint);
        if (validateN1 !== undefined) {
            return 'Error';
        }

        const validateN2 = validate({ n2 }, NumberConstraint.numberConstraint);
        if (validateN2 !== undefined) {
            return 'Error';
        }

        let op3 = n1 * n2;
        return op3;
    },

    divisao(n1, n2) {
        const validateN1 = validate({ n1 }, NumberConstraint.numberConstraint);
        if (validateN1 !== undefined) {
            return 'Error';
        }

        const validateN2 = validate({ n2 }, NumberConstraint.numberConstraint);
        if (validateN2 !== undefined) {
            return 'Error';
        }
        else if (n2 === 0) {
            return 'Error';
        }

        let op4 = n1 / n2;
        return op4;
    },

    potenciacao(n1, n2) {
        const validateN1 = validate({ n1 }, NumberConstraint.numberConstraint);
        if (validateN1 !== undefined) {
            return 'Error';
        }

        const validateN2 = validate({ n2 }, NumberConstraint.numberConstraint);
        if (validateN2 !== undefined) {
            return 'Error';
        }

        let op5 = n1 ** n2;
        return op5;
    },
};

module.exports = Calculator;