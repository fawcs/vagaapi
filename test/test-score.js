const expectChai = require('chai').expect;
const score = require('../app/model/Score')()

describe("#Score - Teste da classe responsável por calcular o score", function () {
    
    it("Validação de erro ao não informar nenhum valor ao instancia Score", function (done) {
        
        try {
            let objLevel = new score();
        } catch (error) {
            expectChai(error.msg).to.equal("Nenhum valor pode estar em branco");
            done();
        }
    });
    
    
    it("Tendo o nivel da vaga como 3 e a localização A e o nivel do candidato como 4 e a localização A é esperado um score 87", function (done) {
        
        let objScore = new score(3, 4, 'A', 'A');
        let scoreResult = objScore.calculateScore();
        
        expectChai(scoreResult).to.equal(87);
        done();
    });


    it("Tendo o nivel da vaga como 4 e a localização F e o nivel do candidato como 2 e a localização A é esperado um score 37", function (done) {

        let objScore = new score(4, 2, 'F', 'A');
        let scoreResult = objScore.calculateScore();

        expectChai(scoreResult).to.equal(37);
        done();
    });


    it("Tendo o nivel da vaga como 3 e a localização A e o nivel do candidato como 2 e a localização C é esperado um score 62", function (done) {

        let objScore = new score(3, 2, 'A', 'C');
        let scoreResult = objScore.calculateScore();

        expectChai(scoreResult).to.equal(62);
        done();
    });
});