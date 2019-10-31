const log4js = require('log4js');

log4js.configure({
  appenders: {
     app: { type: 'file', filename: 'app.log' },
     database:{ type: "file", category: [ 'mongo'], filename: "database.log" }
},
  categories: { default: { appenders: ['app'], level: 'debug' },
  database:{appenders: ['database'], level: 'debug'} }
});

const log = function(){
    return log4js.getLogger('app');
};

const dblog = function(){
  return log4js.getLogger('database');
};

module.exports = {
  log,
  dblog
};
