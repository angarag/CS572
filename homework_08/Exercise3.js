'use strict'

const express = require('express');
const cors = require('cors');
var app = express();
const url = require('url');
const logger = require('morgan')
const fs = require('fs');
const path = require('path')
const bodyParser = require('body-parser');
const db = require('./db.js')

const port = process.env.port || 3000;

var validateRequest = (req, res,next) => {
    return (req, res, next) => {
        //Validate if request has a valid JSON
        console.log('Validating request JSON', req.body, req.method)
        if (req.method === 'POST' && req.body === undefined)
            res.json({ message: 'Error occured in parsing the request' })
        else {
            req.lab8 = req.body;
            next();
        }
    }
}
app.use(cors());
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(logger('combined', { stream: accessLogStream }))
app.use(db())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(validateRequest());
app.use('/api',require('./routes.js'))
//{"name":"Hyvee","category":"Rest","location":[{"long":"41.011239"},{"lang":"-91.9684817,17"}]}

app.listen(3000)
