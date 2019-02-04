let app = require('./config/express')();
let config = require('./config/environment');

app.listen(config.port, function(){
    console.log('API rodando na porta:' + config.port );
})