let express = require('express');
let consign = require('consign');
let expressValidator = require('express-validator');

module.exports = function() {

    let app = express();
    app.use(expressValidator());
    app.use(express.json());

    let v1route = express.Router();
    consign({
        cwd: 'api',
        verbose: true
        })
        .then('infra')
        .then('dao')
        .then('model')
        .then('controllers')
        .then('routes')
        .into(app);

    //app.use('/v1',v1route);

    //consign(
        //{
            //cwd: 'api',
            //verbose: false 
        //})
        //.include('routes')
        //.into(v1route);


    app.use(function(req,res,next){
        res.status(404)
        res = {"erro": { "mensagem": "Chamada inválida de API" }}
        next();
    })

    return app;
}