const express = require('express');
const CancionCtrl = require('../controllers/CancionController');

const Router = express.Router();
const App = express();

Router.get('/',CancionCtrl.index)
      .post('/',CancionCtrl.create)
      .get('/:key/:value',CancionCtrl.find,CancionCtrl.show)
      .put('/:key/:value',CancionCtrl.find,CancionCtrl.update)
      .delete('/:key/:value',CancionCtrl.find,CancionCtrl.remove);


// Configurar cabeceras y cors
App.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
      next();
  });


      module.exports = Router;