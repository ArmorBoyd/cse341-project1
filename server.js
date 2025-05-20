const express = require('express');

const bodyParser = require('body-parser');

const mongodb = require('./routes/contacts');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    }
    else {
        app.listen(port, () => { console.log(`Database is listening and node Running on port ${port}`) });
    }
});
