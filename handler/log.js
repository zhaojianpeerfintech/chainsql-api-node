var path = require('path');
var log4js = require("log4js");

log4js.configure(path.join(__dirname, "log4js.json"));
// log4js.configure();
// var logger = log4js.getLogger('test');

// logger.trace('this is trace');
// logger.debug('this is debug');
// logger.info('this is info');
// logger.warn('this is warn');
// logger.error('this is error');
// logger.fatal('this is fatal');

exports.logger = function (name) {
    var logger = log4js.getLogger(name);
    return logger;
};
//"replaceConsole": true