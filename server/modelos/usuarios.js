const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre:{
        required:true,
        type:String
    },
    apellido:{
        required:true,
        type:String
    },
    email: {
        required:true,
        type:String,
        lowercase:true,
        unique:true
    }
})


module.exports = mongoose.model('Usuario',usuarioSchema);