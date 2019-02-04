const { check , validationResult } = require('express-validator/check');

exports.validaVaga = () => {
   return [
      check(['empresa','titulo','nivel','localizacao'],'Preenchimento obrigatório').exists(),
      check('descricao').optional(),
      check('localizacao','localizacao deve ser uma letra entre A e F').isIn(['A','B','C','D','E','F']),
      check('nivel','nivel deve ser um número de 1 a 5').isIn([1,2,3,4,5]),
   ]
};

exports.validaResultados = (req,res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    };
};

exports.create = (req,res,next) => {
    //Criar no BD
    let vagaId = 1;
    res.json({
        "id": vagaId,
        "status": "Criado com sucesso",
        "hora_criacao" : Date.now()
    })
};

exports.read = (req,res,next) => {
    if (!req.params.id){
        return res.status(422).json({error: 'fornecer um id de vaga'});
    }

    //Ler no BD

    res.json({
        "id": req.params.id,
        "empresa": "Teste",
        "titulo": "Vaga teste",
        "descricao": "Criar os mais diferentes tipos de teste",
        "localizacao": "A",
        "nivel": 3
    })
}