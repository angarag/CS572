const express = require('express')
const app = express()
const db = require('./db.js')
const crypto = require('./crypto.js')

const message = { message: "ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03" }

app.get('/secret', (req, res) => {
    console.log('Decrypted message: ', crypto.decrypt(message.message))
    db.upsert(Object.create(message));
    db.findOne()
        .then((data) => {
            message.message = crypto.decrypt(data.message);
            res.json(message);
        })
        .catch((err) => {
                message.message = "Error occured"
            res.json(message)
        })

})

app.listen(3000, () => {
    console.log('listening on 3000')
})