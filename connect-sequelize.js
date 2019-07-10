const Sequelize = require('sequelize');

function setup() {    
    let sequelize = new Sequelize("powerview", "sa", "password", {
    host: "localhost",
    dialect: 'mssql',
    operatorsAliases: false,
    define: {freezeTableName: true},
    pool: {
        max: 5, 
        min: 0, 
        acquire: 30000, 
        idle: 10000},
    logging:x=>x,
    dialectOptions: {
        encrypt: false,
    },
})

    let something = sequelize.define(
        'something', {
            key: {type: Sequelize.STRING, primaryKey: true},
            name: {type: Sequelize.STRING}
        },
        {createdAt: false, updatedAt: false});
    something.sync({force:true})
}

setup()