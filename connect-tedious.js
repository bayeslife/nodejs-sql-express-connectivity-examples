
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

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

var connection = new Connection(config);
connection.on('connect', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');
  }
});

