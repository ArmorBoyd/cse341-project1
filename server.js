const express = require('express');

const mongodb = require('./routes/contacts');

const app = express();


const port = process.env.PORT || 3000;

app.use('/', require('./routes'));


mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    }
    else {
        app.listen(port, () => { console.log(`Databse is listening and node Running on port ${port}`) });
    }
});
