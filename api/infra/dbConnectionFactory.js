const mySql = require('mysql');
const config = require('../../config/environment');
let pool = null;

function _createPool() {
    pool = mySql.createPool({
        connectionLimit: 10,
        host: config.mySql_url,
        user: config.mySql_user,
        password: config.mySql_password,
        database: config.mySql_database,
        debug: false
    });
    
    pool.on('enqueue',() => {
        console.log('waiting for available slot');
    })
}

_createPool();
function dbConnection(callback) {
    pool.getConnection( (err, connection) => {
        if(err){
            pool.end(error => {
                console.log(error)
                _createPool();
            });
            return;
        }
        return callback(null,connection);
    })
    
}
module.exports = function() {
    return dbConnection;
}