const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/login',{ useNewUrlParser:true });

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function () {
    console.log('success')
})
module.exports = db;

