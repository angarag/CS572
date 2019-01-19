'use strict'

const express = require('express');
const axios = require('axios');
const cacheControl = require('express-cache-controller')
const url = require('url');
const paginate = require('express-paginate');

const port = process.env.port || 3000;
var app = express();
var router = express.Router();

//Setup
app.set('trust proxy',true);
app.enable('case sensitive routing');
app.enable('strict routing');
app.set('x-powered-by',false);
app.set('query parser','simple');

app.use(cacheControl({
    private: true,
    maxAge: 86400,
}));
app.use(paginate.middleware(10, 50));

app.set('');
/* GET home page. */
app.get('/favicon.ico',(req,res)=>{
    const url_obj = url.parse(req.url, true);
    if (url_obj.path === '/favicon.ico')
        res.end();

})
app.get('/users',(req,res)=>{
    const obj = {
        message:'Error occured in parsing',
        course:'MWA'
    }
    res.set({
        'content-type':'application/json',
        'warning':'this is MWA course',
        'Last-Modified': (new Date()).toUTCString(),
        'Expires':(new Date(new Date().setDate(new Date().getDate() + 1))).toUTCString()
    })
    const mars = async ()=> {
        try{
            const result = await axios.get('https://randomuser.me/api/?results=10');
            console.log(result.data.results);
            res.jsonp(result.data.results);
        }catch(error){
            console.log('Error occured',error);
            res.jsonp(message)
        }
    };
    mars();
   
})


app.listen(port,()=>{
    console.log('Listening on 3000')
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
  
  module.exports = app;