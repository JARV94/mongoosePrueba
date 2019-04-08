const express = require ("express");
const mongoose = require('mongoose');
const  app = express();

//middlewares para realizar peticiones post y put
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api',require('./rutas/usuarios'));

const url = "mongodb://localhost:27017/BasePrueba"

mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true
  },(error) => {
    if (error) throw error;
    console.log('Base de Datos Online')
});


//crear tu servidor
app.listen(3000,function(){
    console.log("Servidor en puerto 3000");
})