const locality = require('../app/model/Locality')();
const expectChai = require('chai').expect;

describe("#Localidade - Teste da classe responsável por calcular a localidade", function () {

    it("Validação de erro ao não informar o ponto de partida ao instanciar o objeto", function (done) {

        try {
            let objLocality = new locality('');
        } catch (error) {
            expectChai(error.msg).to.equal("Por favor informe um local de partida")
            done();
        }
    });


    it("Validação de erro para o caso de não existir o local de partida", function (done) {

        try {
            let objLocality = new locality('Z');
        } catch (error) {
            expectChai(error.msg).to.equal("O local de partida informado não existe")
            done();
        }
    });


    it("Validação do ponto A até o ponto B", function (done) {

        let objLocality = new locality('A');
        let solutions = objLocality.result();

        expectChai(solutions.B.cost).to.equal(5)
        done();
    });


    it("Validação do ponto A até o ponto C", function (done) {

        let objLocality = new locality('A');
        let solutions = objLocality.result();

        expectChai(solutions.C.cost).to.equal(12)
        done();
    });


    it("Validação do ponto A até o ponto D", function (done) {

        let objLocality = new locality('A');
        let solutions = objLocality.result();

        expectChai(solutions.D.cost).to.equal(8)
        done();
    });


    it("Validação do ponto A até o ponto E", function (done) {

        let objLocality = new locality('A');
        let solutions = objLocality.result();

        expectChai(solutions.E.cost).to.equal(16)
        done();
    });


    it("Validação do ponto A até o ponto F", function (done) {

        let objLocality = new locality('A');
        let solutions = objLocality.result();

        expectChai(solutions.F.cost).to.equal(16)
        done();
    });
})
