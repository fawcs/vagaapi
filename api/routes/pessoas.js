const pessoasController = require('../controllers/pessoas');

module.exports = (app) => {
   app.post( '/pessoas', pessoasController.validacao(), pessoasController.create);
   app.get('/pessoas/:id',pessoasController.read);
};