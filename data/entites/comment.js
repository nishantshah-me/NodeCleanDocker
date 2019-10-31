const logger = require("../../presentation/util/logger")

module.exports = {
    one : function(){
        console.log('one function called');
        const log = logger.getLogger('cheese');
        log.trace('Entering cheese testing');
        log.debug('Got cheese.');
        log.info('Cheese is Comté.');
        log.warn('Cheese is quite smelly.');
        log.error('Cheese is too ripe!');
        log.fatal('Cheese was breeding ground for listeria.');
        return "Message from one";
    },

    two : 20
}