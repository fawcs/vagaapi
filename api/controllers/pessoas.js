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
        return res.status(422).json({error: 'fornecer um id de vaga'});
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