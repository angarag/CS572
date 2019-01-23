const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const client = new MongoClient(process.env.DB_CONN, { useNewUrlParser: true })

let db = undefined;

const db_middleware = function () {
    return function (req, res, next) {
        if (db === undefined) {
            console.log('init db conn')
            client.connect(function (err) {
                db = client.db('mwa').collection('homework8')
                req.db = db
                if (err) {
                    console.log('Error occured during the db connection')
                    throw err;
                }
                return next();
            });
        }
        else {
            req.db = db;
            next();
        }
    }
}

module.exports = db_middleware;