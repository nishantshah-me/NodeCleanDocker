const logger = require("../../presentation/util/logger")

function Comment(){
    
}

module.exports = {
    one : function(){
       logger.dblog().info("What is this");
        return "Hello users";
    },

    two : 20
}