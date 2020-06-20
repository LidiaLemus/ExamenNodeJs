const Database = require('./app/config/database');
const CONFIG = require('./app/config/config');
const App = require('./app/app');
const express = require('express');
const path = require('path');
const fetch = require ('node-fetch');


Database.connect();
App.use(express.static(path.join(__dirname,'/src/public')));
App.use(express.static(path.join(__dirname,'/src/public/fontawesome')));
App.listen(CONFIG.PORT,function(error){
    if(error) return console.log(error);
    console.log(`Servidor corriendo en el Puerto: ${CONFIG.PORT}`);
});