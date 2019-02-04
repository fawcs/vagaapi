let express = require('express');
let consign = require('consign');
let expressValidator = require('express-validator');

module.exports = function() {

    let v1route = express.Router();

    consign(
        {
            cwd: 'api',
            verbose: false 
        })
        .include('routes')
        .into(v1route);

    let app = express();
    app.use(expressValidator());
    app.use(express.json());
    app.use('/v1',v1route);
    
    app.use(function(req,res,next){
        res.status(404)
        res = {"erro": { "mensagem": "Chamada inválida de API" }}
        next();
    })

    return app;
}