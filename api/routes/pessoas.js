const { check , validationResult } = require('express-validator/check');

const validaPessoa = () => {
   return [
      check(['nome','profissao','localizacao','nivel'],'Preenchimento obrigatório').exists(),
      check('localizacao','localizacao deve ser uma letra entre A e F').isIn(['A','B','C','D','E','F']),
      check('nivel','nivel deve ser um número de 1 a 5').isIn([1,2,3,4,5]),
   ]
};

const validaResultados = (req,res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    };
};

const pessoasController = require('../controllers/pessoas');

module.exports = (app) => {
   app.post( '/pessoas', validaPessoa(), validaResultados, pessoasController.create);
   app.get('/pessoas/:id',pessoasController.read);
};