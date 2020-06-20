const Cancion = require('../models/Cancion');

function index(req,res){
    Cancion.find({})
        .then(cancions => {
            if(cancions.length) return res.status(200).send({cancions});
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cancions) return res.status(404).send({message: 'NOT FOUND'});
    let cancions = req.body.cancions;
    return res.status(200).send({cancions});
    
}

function create(req,res){
    new Cancion(req.body).save().then(cancion => res.status(201).send({cancion})).catch(error => res.status(500).send({error}));
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cancions) return res.status(404).send({message: 'NOT FOUND'});
    let cancion = req.body.cancions[0];
    cancion = Object.assign(cancion,req.body);
    cancion.save().then(cancion => res.status(200).send({message: "UPDATED",cancion})).catch(error => res.status(500).send({error}));
}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cancions) return res.status(404).send({message: 'NOT FOUND'});
    req.body.cancions[0].remove().then(cancion => res.status(200).send({message: 'REMOVED', cancion})).catch(error => res.status(500).send({error}));
}

function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Cancion.find(query).then(cancions => {
        if(!cancions.length) return next();
        req.body.cancions = cancions;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
}