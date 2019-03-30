require('../src/db/mongoose');
const Task = require('../src/models/task');

/*Task.findByIdAndDelete("5c9fe6492ff3836316175538").then((task) => {
    console.log(task);
    return Task.countDocuments({completed: false});
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});*/

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});
    return count;
};

deleteTaskAndCount('5c9fe603f3f023630c2b2900').then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});