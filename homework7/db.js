const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const client = new MongoClient(process.env.DB_CONN, { useNewUrlParser: true })
const str = require('querystring')
class DB {

    helper() {
        return new Promise((res, rej) => {
            client.connect(function (err) {
                const db = client.db('MWA')
                const collection = db.collection('homework7')
                if (err)
                    rej(err)
                else res(collection)
            });

        })
    }
    createConnection() {
        this.helper().then((conn) => { this.conn = conn; })
            .catch((err) => { console.log('Error occured during the db connection') })
    }
    constructor() {
        this.conn = null;
        console.log('db constructor is called')
        this.createConnection();
    }
    getConnection() {
        if (this.conn == null)
            createConnection()
        return this.conn;
    }
    findOne() {
        return new Promise((res, rej) => {
            let obj = this.getConnection().findOne({}, { "_id": 0, message: 1 })
            res(obj)
        });
    }
    upsert(bson) {
        this.getConnection().save(bson);
        console.log('data inserted',bson)
    }
    closeConnection() {
        if (client)
            client.close();
    }
    clearAll(){
        this.getConnection().remove();
    }

}

module.exports = new DB();