// CRUD create read update delete

const mongodb = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }
    const db = client.db(databaseName);
    
    /*db.collection('users').updateOne({
        _id: new ObjectID("5c9fb5bc7310b95c070aa842")
    }, {
        $inc: {
            age: 1
        }
    }).then((resullt) => {
        console.log(resullt);
    }).catch((error) => {
        console.log(error);
    });*/
    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount);
    }).catch((error) => {
        console.log(error);
    });
});