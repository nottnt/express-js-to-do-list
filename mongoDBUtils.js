const MongoClient = require('mongodb').MongoClient

const configMongoDB = {
    password: 'AbLVDGxVofTQiVTC',
    dbName: 'test-skin-dev-skill',
}
let _db

module.exports = {
    connectToServer: function (callback) {
        const uri = `mongodb+srv://tanatat-dev:${configMongoDB.password}@cluster0.l9dn3.mongodb.net/${configMongoDB.dbName}?retryWrites=true&w=majority`
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    
        client.connect((err) => {
            _db = client.db(configMongoDB.dbName)
            // perform actions on the collection object
            return callback(err)
        })

    },
    getDb: function () {
        return _db
    },
}
