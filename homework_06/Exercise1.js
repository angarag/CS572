'use strict'

const express = require('express');
const cors = require('cors');
var app = express();
const url = require('url');
const logger = require('morgan')
const fs = require('fs');
const path = require('path')

const port = process.env.port || 3000;

app.use(cors());
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// setup the logger
app.use(logger('combined', { stream: accessLogStream }))
var jsonParser = express.json()

var grades = [{
    id: 1,
    name: 'Asaad',
    course: 'MWA',
    grade: 95
}, {
    id: 2,
    name: 'Mars',
    course: 'MWA',
    grade: 101.5
},
{
    id: 100
}]
const res_obj = {
    parse_error: { message: 'JSON is not valid' },
    success: { message: 'Request is successfully done' },
    put_error: { message: 'No such record' },
    post_errror: { message: 'Error occured' },
    delete_errror: {message: 'Could not delete, no such object'},
    post_error2: { message: 'Object exists' }
}

app.get('/favicon.ico', (req, res) => {
    const url_obj = url.parse(req.url, true);
    if (url_obj.path === '/favicon.ico')
        res.end();

})
var validateRequest = (req, res) => {
    return (req, res, next) => {
        //Validate if request has a valid JSON
        console.log('Validating request JSON', req.body)
        if (req.body === undefined)
            res.json(res_obj.parse_error)
        else
            next();
    }
}

app.get('/', function (req, res) {
    console.log('get request')
    res.json(grades);
});

app.post('/', jsonParser, validateRequest(), function (req, res) {
    console.log('post request', req.body);
    let is_exist = false;
    grades.map((item) => {
        if (item.id == req.body.id)
            is_exist = true;
    })
    if (is_exist)
        res.json(res_obj.post_error2);
    else {
        grades.push(req.body);
        res.json(res_obj.success);

    }
});

app.put('/', jsonParser, validateRequest(), function (req, res) {
    console.log('put request', req.body);
    var updated = new Promise(function (res, rej) {
        let index = -1;
        grades.map((item, i) => {
            console.log(item.id)
            if (item.id == req.body.id)
                index = i;
        })
        if (index > -1) {
            console.log('array index', index);
            grades[index] = req.body;
            res('ok')
        }
        else rej('nok')
    })

    updated.then(() => {
        res.json(res_obj.success)

    })
        .catch(() => {
            res.json(res_obj.put_errror)
        });
});

app.delete('/', jsonParser, function (req, res) {
    console.log('delete request', req.body);
    var removed = new Promise(function (res, rej) {
        let index = -1;
        grades.map((item, i) => {
            console.log(item.id)
            if (item.id == req.body.id)
                index = i;
        })
        if (index > -1) {
            console.log('array index', index);
            grades.splice(index, 1)
            res('ok')
        }
        else rej('nok')
    })

    removed.then(() => {
        res.json(res_obj.success)

    })
        .catch((err) => {
            res.json(res_obj.delete_errror)
        });
});

app.listen(port, () => {
    console.log('Listening on 3000')
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

module.exports = app;