const vagasController = require('../controllers/vagas');

module.exports = (app) => {
   app.post( '/vagas', vagasController.validacao(), vagasController.create);
   app.get('/vagas/:id',vagasController.read);
};