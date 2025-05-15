const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let contacts;

const initDb = (callback) => {
    if (contacts) {
        console.log('Db is laready intialized');
        return callback(null, contacts);
    }
    MongoClient.connect(process.env.MONGODB_URL)
        .then((client) => {
            contacts = client;
            callback(null, contacts)
        })
        .catch((err) => {
            callback(err);
        });
};


const getDatabase = () => {
    if (!contacts) {
        throw Error('Database not initialized');
    }
    return contacts
};

module.exports = {
    intDb,
    getDatabase
};