const vagasMod = require('../model/vagas');

exports.validacao = (req,res) => {
    vagasMod.validaVaga();
    validaResultados(req,res)
}

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