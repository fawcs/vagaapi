const app = require('../index');
const expectChai = require('chai').expect;
let api = require('supertest')(app);

describe("#POST - Serviço de inserção de uma nova candidatura", function () {
    
    let uri = "/candidaturas"
    
    it("Validação do campo id_vaga - Não pode ser nulo", function (done) {
        api.post(uri)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send({
            "id_vaga": "",
            "id_pessoa": 2
        })
        .end(function (err, res) {
            expectChai(res.statusCode).to.equal(400);
            expectChai(res.body[0].msg).to.equal("O codigo da vaga é obrigatória");
            done();
        })
    });
    
    
    it("Validação do campo id_pessoa - Não pode ser nulo", function (done) {
        api.post(uri)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send({
            "id_vaga": 1,
            "id_pessoa": ""
        })
        .end(function (err, res) {
            expectChai(res.statusCode).to.equal(400);
            expectChai(res.body[0].msg).to.equal("O código do candidato é obrigatório");
            done();
        })
    });
    
    
    // it("Validação de sucesso ao realizar uma candidatura", function(done){
    //     api.post(uri)
    //     .set("Content-Type", "application/json")
    //     .set("Accept", "application/json")
    //     .send({
    //         "id_vaga": 2,
    //         "id_pessoa": 2
    //     })
    //     .end(function (err, res) {
    //         expectChai(res.statusCode).to.equal(201);
    //         expectChai(res.body.msg).to.equal("Candidatura cadastrada com sucesso");
    //         done();
    //     })
    // }) 
    // ESTE TESTE PRECISA FICAR DINAMICO
});