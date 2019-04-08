const express = require("express");
const app = express();
const Usuario = require("../modelos/usuarios");

app.post('/usuario/create',(request,response)=>{
   let usuarioRequest = request.body
   let usuario = new Usuario({
       nombre: usuarioRequest.nombre,
       apellido: usuarioRequest.apellido,
       email:usuarioRequest.email
   });

   usuario.save((error,usuarioDB)=>{
       if(error){
           throw error
       }else{
           response.send({
               ok:true,
               usuario:usuarioDB
           })
       }
   })
})

app.get("/usuarios/obtener",(request,response)=>{
    //Usuario.find({condiciones},{campos seleccionados})
    Usuario.find({},{nombre:1},(error,usuarios)=>{
        if( error){
            throw error
        }else{
            response.send({
                ok:true,
                usuarios:usuarios
            })
        }
    })
})


module.exports = app;