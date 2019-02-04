let express = require('express');
let consign = require('consign');
let expressValidator = require('express-validator');

module.exports = function() {

    let app = express();
    app.use(expressValidator());
    app.use(express.json());
    consign({
        cwd: 'api',
        verbose: false
    })
    .include('DAO')
    .then('model')
    .then('controllers')
    .into(app);

    let v1route = express.Router();
    consign(
        {
            cwd: 'api',
            verbose: false 
        })
        .include('routes')
        .into(v1route);


    app.use('/v1',v1route);

    app.use(function(req,res,next){
        res.status(404)
        res = {"erro": { "mensagem": "Chamada inválida de API" }}
        next();
    })

    return app;
}