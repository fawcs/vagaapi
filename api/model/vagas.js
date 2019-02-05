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
    
    let dadosVaga = req.body;
    let vagasDAO = new req.app.dao.VagasDAO(app);
    try {
        
        vagasDAO.create(dadosVaga, (err, result) => {
            try {
                if (err) throw exception;
                res.format({
                    json: () => {
                        res.status(201).json(result);
                    }
                })
            }
            catch (exception) {
                res.status(500).json(err);
            }
        });
    } catch(error) {
        res.status(400).json(error);
        return;
    }
};

exports.read = (req,res,next) => {
    if (!req.params.id){
        return res.status(422).json({error: 'fornecer um id de vaga'});
    }
    let vagasDAO = new app.dao.VagasDAO(app);
    vagasDAO.read(req.params.id,(err,result) =>{
        try {
            if (err) throw exception;
            res.format({
                json: () => {
                    res.status(201).json(result);
                }
            })
        }
        catch (exception) {
            res.status(500).json(err);
        }
        
    })
}