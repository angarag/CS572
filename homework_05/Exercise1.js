'use strict'

const express = require('express');
const axios = require('axios');
const cacheControl = require('express-cache-controller')
const url = require('url');
const paginate = require('express-paginate');
const path = require('path')
const port = process.env.port || 3000;
const cache_duration = 86400; //1 day
var app = express();
var router = express.Router();
var mcache = require('memory-cache');

//Setup
app.set('trust proxy', true);
app.enable('case sensitive routing');
app.enable('strict routing');
app.set('x-powered-by', false);
app.set('query parser', 'simple');

app.use(cacheControl({
    private: true,
    maxAge: cache_duration,
}));
app.use(paginate.middleware(10, 50));

var cache = (duration) => {
    return (req, res, next) => {
        let key = '__express__' + (req.originalUrl || req.url);// + JSON.stringify(req.headers)['if-none-match']
        console.log(JSON.stringify(req.headers)['if-none-match']);
        let cachedBody = mcache.get(key)
        if (cachedBody) {
            res.send(cachedBody)
            return
        } else {
            res.sendResponse = res.send
            res.send = (body) => {
                mcache.put(key, body, duration * 1000);
                res.sendResponse(body)
            }
            next()
        }
    }
}
/* GET home page. */
app.get('/favicon.ico', (req, res) => {
    const url_obj = url.parse(req.url, true);
    if (url_obj.path === '/favicon.ico')
        res.end();

})
//cache = 10 seconds
app.get('/users', cache(cache_duration / 24 / 360 / 2), (req, res) => {
    const obj = {
        message: 'Error occured in parsing',
        course: 'MWA'
    }
    res.set({
        'content-type': 'application/json',
        'warning': 'this is MWA course',
        'Last-Modified': (new Date()).toUTCString(),
        'Expires': (new Date(new Date().setDate(new Date().getDate() + cache_duration / 3600 / 24))).toUTCString()
    })
    const mars = async () => {
        try {
            const result = await axios.get('https://randomuser.me/api/?results=10');
            console.log(result.data.results);
            /* in case of rendering html
            const html_data = result.data.results.map(
                item => `<tr><td>${item.login.username}</td><td>${item.email}</td></tr>`
            );
            const table = `<table><tr><h3>Users</h3></tr>${html_data}</table>`;
            res.write(table);
            */
            res.jsonp(result.data.results);
        } catch (error) {
            console.log('Error occured', error);
            res.jsonp(message)
        }
    };
    setTimeout(() => {
        mars();
    }, 1000) //setTimeout was used to simulate a slow processing request


})


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