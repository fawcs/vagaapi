exports.create = (req,res,next) => {
    //fetch req.body.id_vaga and check if it exists
    //fetch req.body.id_pessoa and check if it exists
    //check if id_pessoa is in id_vaga already
    //if not -> register and return an success message
    //else -> register an error saying id_pessoa.name is already registered for id_vaga.titulo
}

exports.read = (req,res,next) => {
    if(!req.param.vaga_id) {
        return res.status(422).json({error: 'fornecer um Id de vaga'});
    }

    //read candidatos from db 
    //if success
    return res.json({ 
        "id_vaga": req.param.vaga_id,
        "candidatos":[
            { "id_pessoa": 1 },
            { "id_pessoa": 4 },
            { "id_pessoa": 5 },
        ]
    });
    //else
    return res.status(422).json({error: 'vaga não existe'})
}
