function VagasDAO(app) {
    this._app = app;
};

VagasDAO.prototype.create = function(dadosVaga,callback) {
    let query = 'insert into positions(company, title, description, localization, level) values(?, ?, ?, ?, ?)';

    let company = dadosVaga.empresa;
    let title   = dadosVaga.titulo;
    let description = dadosVaga.descricao;
    let localization = dadosVaga.localizacao;
    let level = dadosVaga.nivel;

    this._app.infra.dbConnectionFactory((err,connection) => {
        connection.query(query,[company,title,description,localization,level],(err,results) => {
            connection.release();
            return callback(err,results);
        })
    })
},

VagasDAO.prototype.read = function(id,callback){
    let query = 'select * from positions where id_vaga = ?'
    this._app.infra.dbConnectionFactory((err,connection) => {
        connection.query(query,[id],(err,results) => {
            connection.release();
            return callback(err,results);
        })
    })
}

module.exports = app => VagasDAO;