const app = require('../index');
const expectChai = require('chai').expect;
let api = require('supertest')(app);

describe("#POST - Serviço de inserção de uma nova vaga", function () {
    
    let uri = "/vagas"
    
    it("Validação do campo Empresa - Não pode ser nulo", function (done) {
        api.post(uri)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send({
            "empresa": "",
            "titulo": "Vaga teste",
            "descricao": "Criar os mais diferentes tipos de teste",
            "localizacao": "A",
            "nivel": 3
        })
        .end(function (err, res) {
            expectChai(res.statusCode).to.equal(400);
            expectChai(res.body[0].msg).to.equal("O nome da empresa da vaga é obrigatória");
            done();
        })
    });
    
    
    it("Validação do campo Titulo - Não pode ser nulo", function (done) {
        api.post(uri)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send({
            "empresa": "Teste",
            "titulo": "",
            "descricao": "Criar os mais diferentes tipos de teste",
            "localizacao": "A",
            "nivel": 3
        })
        .end(function (err, res) {
            expectChai(res.statusCode).to.equal(400);
            expectChai(res.body[0].msg).to.equal("O titulo da vaga é obrigatória");
            done();
        })
    });
    
    
    it("Validação do campo Descricao - Não pode ser nulo", function (done) {
        api.post(uri)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send({
            "empresa": "Teste",
            "titulo": "Vaga Teste",
            "descricao": "",
            "localizacao": "A",
            "nivel": 3
        })
        .end(function (err, res) {
            expectChai(res.statusCode).to.equal(400);
            expectChai(res.body[0].msg).to.equal("A descrição da vaga é obrigatória");
            done();
        })
    });
    
    
    it("Validação do campo Localizacao - Não pode ser nulo", function (done) {
        api.post(uri)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send({
            "empresa": "Teste",
            "titulo": "Vaga Teste",
            "descricao": "Criar os mais diferentes tipos de teste",
            "localizacao": "",
            "nivel": 3
        })
        .end(function (err, res) {
            expectChai(res.statusCode).to.equal(400);
            expectChai(res.body[0].msg).to.equal("A localização da vaga é obrigatória");
            done();
        })
    });
    
    
    it("Validação do campo Nivel - Não pode ser nulo", function (done) {
        
        api.post(uri)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send({
            "empresa": "Teste",
            "titulo": "Vaga Teste",
            "descricao": "Criar os mais diferentes tipos de teste",
            "localizacao": "A",
            "nivel": "" 
        })
        .end(function (err, res) {
            expectChai(res.statusCode).to.equal(400);
            expectChai(res.body[0].msg).to.equal("O nível da vaga é obrigatória");
            done();
        })
    });
    
    
    it("Validação de sucesso ao realizar o registro de uma vaga", function (done) {
        api.post(uri)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send({
            "empresa": "Teste",
            "titulo": "Vaga Teste",
            "descricao": "Criar os mais diferentes tipos de teste",
            "localizacao": "A",
            "nivel": 3
        })
        .end(function (err, res) {
            expectChai(res.statusCode).to.equal(201);
            expectChai(res.body.msg).to.equal("Vaga cadastrada com sucesso");
            done();
        })
    });
});