const express = require('express');
const mongodb = require('./data/database');
const app = express();
app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(process.env.port || port);
        console.log('Database is listening and node Running at port ' + (process.env.port || port));
    }
})

const port = 3000;
