require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete("5c9fe6492ff3836316175538").then((task) => {
    console.log(task);
    return Task.countDocuments({completed: false});
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});