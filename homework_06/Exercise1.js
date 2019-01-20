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
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'}) 
// setup the logger
app.use(logger('combined', {stream: accessLogStream}))
var jsonParser= express.json()

var grades=[{
    id:1,
    name:'Asaad',
    course:'MWA',
    grade:'95'
}]
const res_obj = {
 parse_error:{message:'JSON is not valid'},
 success:{message:'Request is successfully done'},
 put_error:{message:'No such record'},
 post_errror:{message:'Error occured'}
}

app.get('/favicon.ico', (req, res) => {
    const url_obj = url.parse(req.url, true);
    if (url_obj.path === '/favicon.ico')
        res.end();

})
var validateRequest = (req,res) => {
    return (req, res, next) => {
        //Validate if request has a valid JSON
        console.log('Validating request JSON',req.body)
        if(req.body===undefined)
        res.json(res_obj.parse_error)
        else
        next();
    }
}

app.get('/', function (req, res) {
    console.log('get request')
    res.json(grades);
});

app.post('/',jsonParser,validateRequest(),function(req,res){
    console.log('post request');
    console.log(req.body)
    grades.push(req.body);
    res.json(res_obj.success);
});

app.put('/:id',jsonParser,validateRequest(),function(req,res){
    console.log('put request');
    console.log(req.body)
});

app.delete('/:id',function(req,res){
    console.log('delete request',req.body);
    grades = grades.filter(item=>item.id!=req.body.id)

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