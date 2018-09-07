
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
// const controller = require('./controller');
const emailController = require('./emailController');
const session = require('express-session');
const PORT = 3400;
const axios = require('axios');


const app = express();
app.use(bodyParser.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}))

massive(process.env.CONNECTION_STRING).then( dbInstance => {
    app.set('db', dbInstance);
}).catch(err => console.log('Database connection error', err));

app.post(`/api/sendEmail`, emailController.sendEmail);

app.listen(PORT, () => console.log(`Server listening on Port:${PORT}`));