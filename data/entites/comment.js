const logger = require("../../presentation/util/logger")

function Comment(){
    
}

module.exports = {
    one : function(){
        console.log('one function called');
        logger().info('function called');
        logger().error('Not working');
        return "Message from one";
    },

    two : 20
}