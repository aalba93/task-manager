require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5c9fe468de7b5e62d582f529', {age: 1}).then((user) => {
    console.log(user);
    return User.countDocuments({age: 1});
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});