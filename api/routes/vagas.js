const vagasController = require('../controllers/vagas');

module.exports = (app) => {
   app.post( '/vagas', app.controllers.vagas.validacao(), app.controllers.vagas.create);
   app.get('/vagas/:id',app.controllers.vagas.read);
};