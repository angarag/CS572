const crypt= require('crypto')
class Crypto{
    constructor(){
        console.log('crypto constructor is called')
    }
    decrypt(message,algorithm='aes256',password='asaadsaad'){
        const decipher = crypt.createDecipher(algorithm, password);
        const decrypted = decipher.update(message, 'hex', 'utf8') + decipher.final('utf8');
        return decrypted;
    }
}


module.exports = new Crypto();