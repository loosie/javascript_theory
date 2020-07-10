const mysql = require('promise-mysql');

const config ={
    
}

module.exports =mysql.createPool(config)