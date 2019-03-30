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
    db.collection('users').findOne({_id: new ObjectID("5c9d478131c429504251e154")}, (error, user) => {
        if (error) {
            return console.log('Unable to fetch user!')
        }
        console.log(user);
    });
    db.collection('users').find({age: 25}).toArray((error, users) => {
        console.log(users);
    });
    db.collection('users').find({age: 25}).count((error, count) => {
        console.log(count);
    });
    db.collection('tasks').findOne({_id: new ObjectID("5c9fb7a8115b2d5c32c6db00")}, (error, task) => {
        console.log(task);
    });
    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        console.log(tasks);
    });
});