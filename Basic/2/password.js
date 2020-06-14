const crypto = require('crypto');
const fs = require('fs');

const encrypt = (salt, password) =>{
    return new Promise ((resolve, reject) =>{
        crypto.pbkdf2(password, salt.toString(), 1, 32, 'sha512', (err, derivedKey) =>{
            if (err) throw err;
            resolve(derivedKey.toString('hex'));
        });
    
    });
}

fs.readFile('./Basic/2/password.txt', async(err, data) =>{
    if(err) throw err;
    const password = data.toString();
    const salt = crypto.randomBytes(32).toString();
    const digest = await encrypt(salt, password);
    
    await fs.writeFile(`./Basic/2/hashed.txt`, digest, (err)=>{
        if(err) throw err;
        console.log('성공');
        
    });
})