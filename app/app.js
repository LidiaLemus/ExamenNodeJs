const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const App = express();
const Api = require('./routes/cancion');

App.use(bodyParser.urlencoded({extended: false}));
App.use(bodyParser.json());

App.post('/cancions',(req,res)=>{
    console.log(req,body);
    res.send('datos recibidos')
})
//rutas
App.use('/cancion',Api);

App.use(morgan('dev'));

module.exports = App;