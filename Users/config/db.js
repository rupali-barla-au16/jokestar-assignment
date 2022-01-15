const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ruppu:king123@cluster0.yvuf0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Database");
}).catch(err => {
    console.log("cannot conect, something is error");
    process.exit();
});


