const mongoose = require('mongoose');

const CancionSchema = new mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        required: true
    },
     anio: {
        type: String,
        require:true
    },
    genero: {
        type: String,
        required: true,
        enum: ['Rock','Pop','Romantica']
    },
    duracion:{
        type: String,
        require:true
    },
    artista:{
        type:String,
        require:true,
        enum:['Miley Cyrus','Michael Jackson','Romeo Santos']
    },
    posicion:{
        type:Number,
        enum:[1,2,3,4,5,6,7,8,9,10]
    },
    pais:{
        type:String,
        enum:['Guatemala','El Salvador','Nicaragua','Puerto Rico']
    },
    estado:{
        type:Boolean,
        default: true
    }

   
});

const Canciones = mongoose.model('Canciones',CancionSchema);

module.exports = Canciones;