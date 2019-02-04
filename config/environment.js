config = {
    development:{
        mySql_url: process.env.CLEARDB_DATABASE_URL || 'us-cdbr-iron-east-03.cleardb.net',
        mySql_port: process.env.CLEARDB_DATABASE_PORT || '3306',
        mySql_user: process.env.CLEARDB_DATABASE_USER || 'b50f60f60e59f3',
        mySql_password: process.env.CLEARDB_DATABASE_PASSWORD || '8c2891ff',
        mySql_database: process.env.CLEARDB_DATABASE || 'heroku_c4c4063024bd00e',
        
        port: process.env.PORT || 3000
    },
    
    test:{
        mySql_url: process.env.CLEARDB_DATABASE_URL || 'us-cdbr-iron-east-03.cleardb.net',
        mySql_port: process.env.CLEARDB_DATABASE_PORT || '3306',
        mySql_user: process.env.CLEARDB_DATABASE_USER || 'b50f60f60e59f3',
        mySql_password: process.env.CLEARDB_DATABASE_PASSWORD || '8c2891ff',
        mySql_database: process.env.CLEARDB_DATABASE || 'heroku_c4c4063024bd00e',

        port: process.env.PORT || 3001
    },
    
    production:{
        port: process.env.PORT
    }
}


const env = process.env.NODE_ENV || 'development';

module.exports = config[env];