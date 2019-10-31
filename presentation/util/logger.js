const log4js = require('log4js');

log4js.configure({
  appenders: { app: { type: 'file', filename: 'app.log' } },
  categories: { default: { appenders: ['app'], level: 'debug' } }
});

const log = function(){
    return log4js.getLogger('app');
};

module.exports = log;
