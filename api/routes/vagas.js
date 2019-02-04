const { check , validationResult } = require('express-validator/check');

const validaVaga = () => {
   return [
      check(['empresa','titulo','localizacao','nivel'],'Preenchimento obrigatório').exists(),
      check('descricao').optional(),
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

const vagasController = require('../controllers/vagas');

module.exports = (app) => {
   app.post( '/vagas', validaVaga(), validaResultados, vagasController.create);
   app.get('/vagas/:id',vagasController.read);
};