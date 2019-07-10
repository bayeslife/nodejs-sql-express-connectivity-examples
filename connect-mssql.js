const sql = require('mssql')
 
var config = {
    server: 'localhost',
    authentication: {
        type: 'default',
        options: {
        userName: 'sa',
        password: 'password'
        }
    },
    options: {
        database: 'powerview',
        instanceName: 'sqlexpress'
    }
}

sql.connect(config).then(pool => {
    console.log('Connected')
})