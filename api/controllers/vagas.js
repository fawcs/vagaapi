const vagasMod = require('../model/vagas');

exports.validacao = () => {
    let validacoes = vagasMod.validaVaga();
    validacoes.push(vagasMod.validaResultados);
    return validacoes;
}

exports.create = (req,res,next) => {
    vagasMod.create(req,res,next);
};

exports.read = (req,res,next) => {
    vagasMod.read(req,res,next);
}