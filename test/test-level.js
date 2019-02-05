const expectChai = require('chai').expect;
const level = require('../app/model/Level')()

describe("#Nivel - Teste da classe responsável por calcular o nível", function () {
    
    it("Validação de erro ao não informar o nível", function (done) {
        
        try {
            objLevel = new level();
        } catch (error) {
            expectChai(error.msg).to.equal("O nível não pode ter valor nulo");
            done();
        }
    });
    
    
    it("Validação de erro ao informar apenas um dos dois niveis requeridos", function (done) {
        
        try {
            objLevel = new level(3);
        } catch (error) {
            expectChai(error.msg).to.equal("O nível não pode ter valor nulo");
            done();
        }
    });
    
    
    it("Validação do resultado inserindo Nível da Vaga 3 e o Nível do Candidato 1", function (done) {
        
        objLevel = new level(3, 1);
        result = objLevel.calculateLevel();
        
        expectChai(result).to.equal(50)
        done();
    });
    
    
    
    it("Validação do resultado inserindo Nível da Vaga 1 e o Nível do Candidato 3", function (done) {
        
        objLevel = new level(1, 3);
        result = objLevel.calculateLevel();
        
        expectChai(result).to.equal(50)
        done();
    });


    it("Validação do resultado inserindo Nível da Vaga 2 e o Nível do Candidato 2", function (done) {

        objLevel = new level(2, 2);
        result = objLevel.calculateLevel();

        expectChai(result).to.equal(100)
        done();
    });

});