const path = require('path');

module.exports = {
  dbUrl: 'mongodb+srv://philippebalestri67:ygpq9OnSJHfGKzKU@cluster0.pox3g.mongodb.net/twitter?retryWrites=true&w=majority&appName=Cluster0',
  cert: path.join( __dirname, '../ssl/localhost.crt'),
  key: path.join( __dirname, '../ssl/localhost.key'),
}