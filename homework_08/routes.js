const express = require('express');
const app = express.Router();
app.post('/insert', (req, res) => {
    req.db.insertOne(req.body, (err, data) => {
        if (err)
            res.json(err)
        else
            res.json(data);
    });
})

app.get('*', (req, res) => {
    if (req.db === undefined)
        console.log('db is not inited')
    req.db.find({}, { _id: 0 })
        .toArray(function (err, result) {
            res.json(result);
        });
});

app.post('/MUM', (req, res) => {

    req.db.find(
        {
            'name':(req.body.name===undefined)?{$not:{$eq:""}}:`${req.body.name}`,
            'category': `${req.body.category}`,
             'location':
             
                {$near:
                {
                    $geometry:
                        { type: "Point", coordinates: [-91.9665342, 41.077654] },
                    $maxDistance: 100000
                }

            }
        }
    ).limit(33)
        .toArray(function (err, result) {
            if (err)
                res.json(err)
            else
                res.json(result);
        });

})


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