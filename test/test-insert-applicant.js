const app = require('../index');
const expectChai = require('chai').expect;
let api = require('supertest')(app);

describe("#POST - Serviço de inserção de um novo candidato", function () {
    
    let uri = "/pessoas"
    
    it("Validação do campo Nome - Não pode ser nulo", function (done) {
        api.post(uri)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send({
            "nome": "",
            "profissao": "Engenheiro de Software",
            "localizacao": "C",
            "nivel": 2
        })
        .end(function (err, res) {
            expectChai(res.statusCode).to.equal(400);
            expectChai(res.body[0].msg).to.equal("O nome do candidato é obrigatório");
            done();
        })
    });
    
    
    it("Validação do campo Profissão - Não pode ser nulo", function (done) {
        api.post(uri)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send({
            "nome": "John Doe",
            "profissao": "",
            "localizacao": "C",
            "nivel": 2
        })
        .end(function (err, res) {
            expectChai(res.statusCode).to.equal(400);
            expectChai(res.body[0].msg).to.equal("A profissão do candidato é obrigatório");
            done();
        })
    });
    
    
    it("Validação do campo Localização - Não pode ser nulo", function (done) {
        api.post(uri)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send({
            "nome": "John Doe",
            "profissao": "Engenheiro de Software",
            "localizacao": "",
            "nivel": 2
        })
        .end(function (err, res) {
            expectChai(res.statusCode).to.equal(400);
            expectChai(res.body[0].msg).to.equal("A localização do candidato é obrigatório");
            done();
        })
    });
    
    
    it("Validação do campo Nível - Não pode ser nulo", function (done) {
        api.post(uri)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send({
            "nome": "John Doe",
            "profissao": "Engenheiro de Software",
            "localizacao": "C",
            "nivel": ""
        })
        .end(function (err, res) {
            expectChai(res.statusCode).to.equal(400);
            expectChai(res.body[0].msg).to.equal("O nível do candidato é obrigatório");
            done();
        })
    });


    it("Validação do limite proposto para nivel do candidato que deverá ser no minimo 1", function (done) {
        api.post(uri)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .send({
                "nome": "John Doe",
                "profissao": "Engenheiro de Software",
                "localizacao": "C",
                "nivel": 0
            })
            .end(function (err, res) {
                expectChai(res.statusCode).to.equal(400);
                expectChai(res.body.msg).to.equal("O Nível do candidato deve estar entre 1 e 5");
                done();
            })
    });


    it("Validação do limite proposto para nivel do candidato que deverá ser no máximo 5", function (done) {
        api.post(uri)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .send({
                "nome": "John Doe",
                "profissao": "Engenheiro de Software",
                "localizacao": "C",
                "nivel": 6
            })
            .end(function (err, res) {
                expectChai(res.statusCode).to.equal(400);
                expectChai(res.body.msg).to.equal("O Nível do candidato deve estar entre 1 e 5");
                done();
            })
    });


    it("Validação de sucesso ao realizar o cadastro de um candidato", function (done) {
        api.post(uri)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .send({
                "nome": "John Doe",
                "profissao": "Engenheiro de Software",
                "localizacao": "C",
                "nivel": 3
            })
            .end(function (err, res) {
                expectChai(res.statusCode).to.equal(201);
                expectChai(res.body.msg).to.equal("Candidato cadastradx com sucesso");
                done();
            })
    });
});