'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const validator = require('./middleware/validator');
const logger = require('./middleware/logger');


app.use(logger);

app.get('/',(req,res)=>{
    res.status(200).send('Server is Up & Running!')
});

app.get('/person',validator,(req,res,next)=>{
    const userName = req.query.name;
    res.json({name: userName})
    // if (userName) {
    //     res.json({name: userName})
    // } else {
    //     throw new Error('No name found!')
    // }
});

app.put('/hello', (req, res) => {
    res.status(200).send(' This is a put request!');
  });

app.use('*', notFoundHandler);

app.use(errorHandler);


function start(port){
    app.listen(port, ()=>{
        console.log(`Server is Running on port ${port}`);
    })
}

module.exports = {app, start}