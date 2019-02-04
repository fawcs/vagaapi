const { check , validationResult } = require('express-validator/check');

exports.validaPessoa = () => {
   return [
      check(['nome','profissao','localizacao','nivel'],'Preenchimento obrigatório').exists(),
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
exports.create = function(req,res,next){
    //Criar no BD
    let pessoaId = 1;
    res.json({
        "id": pessoaId,
        "status": "Cadastrado com sucesso",
        "hora_criacao" : Date.now()
    })
};

exports.read = function(req,res,next){
    if (!req.params.id){
        return res.status(422).json({error: 'fornecer um id de pessoa'});
    }
    
    //Ler no BD
    
    res.json({
        "id": req.params.id,
        "nome": "John Doe",
        "profissao": "Engenheiro de Software",
        "localizacao": "C",
        "nivel": 2
    })
}