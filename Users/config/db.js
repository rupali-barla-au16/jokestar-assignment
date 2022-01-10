const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://BE:1rRdMmqxxtxby5EM@cluster0.9jtrt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Database");
}).catch(err => {
    console.log("cannot conect, something is error");
    process.exit();
});


