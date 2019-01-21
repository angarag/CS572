const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true })
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
        console.log('data inserted')
    }
    closeConnection() {
        if (client)
            client.close();
    }

}

module.exports = new DB();