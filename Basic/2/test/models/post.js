const pool = require('../modules/pool');


const table = 'post';
const post = {
    signup: async(id,password)=>{
        
        const fields = 'id,password';

        const query = `INSERT INTO ${table}(${fields}) VALUES (${id},${password})`
        
        try{
            const result = await pool.queryParam(query);
            const resultIdx = result.insertIdx;
            return resultIdx;
        }
        catch(err){
            throw err;
        }
    } 
}

module.exports =post;