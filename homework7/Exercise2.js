const express = require('express')
const app = express()
const db = require('./db.js')
const crypto = require('./crypto.js')
require('dotenv').config();

const message = { message: process.env.ENCRYPTED_MESSAGE }

function init(req,res,next){
    //db.clearAll();
    db.upsert(Object.create(message));
    next()
}
app.use(init);

app.get('/secret', (req, res) => {
        db.findOne()
        .then((data) => {
            console.log('Data to decrypt:',data.message)
            crypto.decrypt(data.message)
                .then((decrypted) => {
                    message.message = decrypted;
                    res.json(message);
                })
                .catch((err) => {
                    message.message = 'Could not decrypt the message';
                    res.json(message);
                });

        })
        .catch((err) => {
            message.message = "Error occured, maybe there is no record in DB"
            res.json(message)
        })

})

app.listen(3000, () => {
    console.log('listening on 3000')
})